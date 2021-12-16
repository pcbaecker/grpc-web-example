import { Component, OnInit } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { UInt64Value } from 'google-protobuf/google/protobuf/wrappers_pb';
import {BookServiceClient} from './generated/BookServiceClientPb';
import {Book} from './generated/book_pb';
import {MatTableDataSource} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author'];
  bookService = new BookServiceClient('http://localhost:8080', null, null);
  listOfBooks = new MatTableDataSource<Book>();
  bookTitle = "";
  bookAuthor = "";

  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
       this.loadAllBooks();
  }

  loadAllBooks():void {
    console.log("Loading book list form server");
    this.bookService.findAll(new Empty(), null).then((list) => {
      this.listOfBooks.data = list.getBooksList();
      console.log("Books sucessfully loaded");
    })   
  }

  onCreateBook():void {
    var book = new Book();
    book.setTitle(this.bookTitle);
    book.setAuthor(this.bookAuthor);
    this.bookTitle = "";
    this.bookAuthor = "";
    this.bookService.create(book, null).then((b) => {
      console.log("The new book got the id = " + b.getId());
      this.loadAllBooks();
    }).catch((reason) => {
      this._snackBar.open(reason.message, "Ok");
    });
  }

  // Is not used but working
  onLoadInvalidBook(): void {
    console.log("Trying to load a book with invalid id = 9999");
    var idToFind = new UInt64Value();
    idToFind.setValue(9999);
    this.bookService.findById(idToFind, null).then((b) => {
      console.log("This should not happen!");
    }).catch((r) => {
      if (grpc.Code.NotFound == r.code) {
        console.log("As intented we got: " + r.message);
      } else {
        console.log("We got a different error code = " + r.code);
      }
    });
  }
}

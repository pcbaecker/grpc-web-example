import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Book extends jspb.Message {
  getId(): number;
  setId(value: number): Book;

  getTitle(): string;
  setTitle(value: string): Book;

  getAuthor(): string;
  setAuthor(value: string): Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    id: number,
    title: string,
    author: string,
  }
}

export class BookList extends jspb.Message {
  getBooksList(): Array<Book>;
  setBooksList(value: Array<Book>): BookList;
  clearBooksList(): BookList;
  addBooks(value?: Book, index?: number): Book;

  getInfo(): string;
  setInfo(value: string): BookList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookList.AsObject;
  static toObject(includeInstance: boolean, msg: BookList): BookList.AsObject;
  static serializeBinaryToWriter(message: BookList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookList;
  static deserializeBinaryFromReader(message: BookList, reader: jspb.BinaryReader): BookList;
}

export namespace BookList {
  export type AsObject = {
    booksList: Array<Book.AsObject>,
    info: string,
  }
}


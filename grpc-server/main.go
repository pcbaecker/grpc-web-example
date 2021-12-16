package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"strconv"

	pb "book-server/book"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/protobuf/types/known/emptypb"
	"google.golang.org/protobuf/types/known/wrapperspb"
)

var books []*pb.Book

type server struct {
	pb.UnimplementedBookServiceServer
}

func (s *server) FindById(ctx context.Context, id *wrapperspb.UInt64Value) (*pb.Book, error) {
	if len(books) < int(id.Value) {
		return &pb.Book{}, grpc.Errorf(codes.NotFound, "A book with id = "+strconv.Itoa(int(id.Value))+" could not be found!")
	}
	return books[id.Value], nil
}

func (s *server) FindAll(context.Context, *emptypb.Empty) (*pb.BookList, error) {
	result := &pb.BookList{Books: books, Info: "Something useful"}
	return result, nil
}
func (s *server) Create(ctx context.Context, book *pb.Book) (*pb.Book, error) {
	if len(book.Title) < 3 || len(book.Author) < 3 {
		return &pb.Book{}, grpc.Errorf(codes.InvalidArgument, "Book title and author must contain at least 3 chars!")
	}
	book.Id = uint64(len(books) + 1)
	books = append(books, book)
	return book, nil
}

func main() {
	lis, err := net.Listen("tcp", fmt.Sprintf("localhost:%d", 9090))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterBookServiceServer(s, &server{})
	log.Printf("server listening at %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}

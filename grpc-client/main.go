package main

import (
	pb "book-client/book"
	"context"
	"log"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/emptypb"
)

func main() {
	// Connect to the server
	conn, err := grpc.Dial("localhost:9090", grpc.WithInsecure())
	if err != nil {
		log.Fatalf("fail to dial: %v", err)
	}
	defer conn.Close()
	client := pb.NewBookServiceClient(conn)

	// Create a book
	start := time.Now()
	book, err := client.Create(context.Background(), &pb.Book{Title: "The book title", Author: "The book author"})
	if err != nil || book.Id == 0 {
		panic(err)
	}

	// Read all books
	listOfBooks, err := client.FindAll(context.Background(), &emptypb.Empty{})
	if err != nil {
		panic(err)
	}

	// Print result
	elapsed := time.Since(start)
	log.Printf("Execution took %s", elapsed)
	for _, b := range listOfBooks.Books {
		log.Println(b)
	}
}

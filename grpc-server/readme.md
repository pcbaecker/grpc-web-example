# GRPC Server

This server offers the GRPC API which can be consumed by GRPC-Clients and per GRPC-Web from a frontend.

To start:

    go run main.go

To generate the .go files from the .proto files:

    // Specify go path for the compiler
    export PATH=$PATH:$(go env GOPATH)/bin
    // Compile the .proto files
    protoc --go_out=book --go_opt=paths=source_relative \
    --go-grpc_out=book --go-grpc_opt=paths=source_relative -I=.. book.proto
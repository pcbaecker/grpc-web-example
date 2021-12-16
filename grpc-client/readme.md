# GRPC Client

This client is just to show how a GRPC-Client could look. It is not necessary for this demonstration project.

To generate the .go files from the .proto files:

    // Specify go path for the compiler
    export PATH=$PATH:$(go env GOPATH)/bin
    // Compile the .proto files
    protoc --go_out=book --go_opt=paths=source_relative \
    --go-grpc_out=book --go-grpc_opt=paths=source_relative -I=.. book.proto
# Frontend

This is a simple frontend to show how GRPC-Web is used with Angular. To start the server:

    ng serve

To generate the TypeScript files from the .proto files:

    protoc -I=.. --js_out="import_style=commonjs,binary:src/app/generated" --grpc-web_out=import_style=typescript,mode=grpcweb:src/app/generated book.proto
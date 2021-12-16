# GRPC-Web example

This little project shows a basic usage of GRPC working with a browser (e.g. Angular). To make this working GRPC-Web is used.
The project consists of the following components:
- The GRPC-Server
- The GRPC-Client (not necessary but nice to see)
- The GRPC-Web Proxy
- The Angular-Frontend

### GRPC Web Proxy

https://github.com/improbable-eng/grpc-web/tree/master/go/grpcwebproxy
https://pkg.go.dev/github.com/improbable-eng/grpc-web/go/grpcwebproxy#section-readme

The server listens to port 8080 and the proxy will translate the the GRPC-Web call on port 9090. First start the server then with the following command the proxy:  

    ./grpcwebproxy --backend_addr=localhost:9090 --run_tls_server=false --allow_all_origins

### Also interesting

https://github.com/grpc/grpc-go/tree/master/examples

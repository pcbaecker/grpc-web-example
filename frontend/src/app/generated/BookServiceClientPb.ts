/**
 * @fileoverview gRPC-Web generated client stub for book
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as book_pb from './book_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';


export class BookServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoFindById = new grpcWeb.MethodDescriptor(
    '/book.BookService/FindById',
    grpcWeb.MethodType.UNARY,
    google_protobuf_wrappers_pb.UInt64Value,
    book_pb.Book,
    (request: google_protobuf_wrappers_pb.UInt64Value) => {
      return request.serializeBinary();
    },
    book_pb.Book.deserializeBinary
  );

  findById(
    request: google_protobuf_wrappers_pb.UInt64Value,
    metadata: grpcWeb.Metadata | null): Promise<book_pb.Book>;

  findById(
    request: google_protobuf_wrappers_pb.UInt64Value,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: book_pb.Book) => void): grpcWeb.ClientReadableStream<book_pb.Book>;

  findById(
    request: google_protobuf_wrappers_pb.UInt64Value,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: book_pb.Book) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/book.BookService/FindById',
        request,
        metadata || {},
        this.methodInfoFindById,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/book.BookService/FindById',
    request,
    metadata || {},
    this.methodInfoFindById);
  }

  methodInfoFindAll = new grpcWeb.MethodDescriptor(
    '/book.BookService/FindAll',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    book_pb.BookList,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    book_pb.BookList.deserializeBinary
  );

  findAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<book_pb.BookList>;

  findAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: book_pb.BookList) => void): grpcWeb.ClientReadableStream<book_pb.BookList>;

  findAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: book_pb.BookList) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/book.BookService/FindAll',
        request,
        metadata || {},
        this.methodInfoFindAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/book.BookService/FindAll',
    request,
    metadata || {},
    this.methodInfoFindAll);
  }

  methodInfoCreate = new grpcWeb.MethodDescriptor(
    '/book.BookService/Create',
    grpcWeb.MethodType.UNARY,
    book_pb.Book,
    book_pb.Book,
    (request: book_pb.Book) => {
      return request.serializeBinary();
    },
    book_pb.Book.deserializeBinary
  );

  create(
    request: book_pb.Book,
    metadata: grpcWeb.Metadata | null): Promise<book_pb.Book>;

  create(
    request: book_pb.Book,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: book_pb.Book) => void): grpcWeb.ClientReadableStream<book_pb.Book>;

  create(
    request: book_pb.Book,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: book_pb.Book) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/book.BookService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/book.BookService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

}


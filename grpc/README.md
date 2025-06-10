# gRPC - Remote Procedure Call
Framework developed by google aiming to make easier the process of communication between systems.

* Ideal for microservices
* Mobile, browsers* and backend
* Automatic generation of libraries
* Bidirectional streaming using HTTP/2
* Official support for languages like go (gRPC-GO), Java (gRPC-JAVA), c (gRPC-C) - respectivelly, all c based languages

Docs: https://grpc.io/docs/languages/go/quickstart/

## Protocol Buffers
Protocol buffers are Google's language-neutral, platform-neutral, extensible mechanism for serializing structured data - think XML, but smaller, faster and simpler. (developers.google.com/protocol-buffers)

### Protocol Buffers vs JSON
* Binary files < JSON
* Binary serialization is smaller than JSON
* Less traffic resources
* Faster process

Protofile example:
```bash
syntax = "proto3";

message SearchRequest {
    string query = 1;
    int32 page_number = 2;
    int32 result_per_page = 3;
}
```
Type of parameter (string) and index position - for internal control of protocol buffer.

### HTTP/2
* Google initially called it SPDY
* Released in 2015
* Data transfered are binary and not text like HTTP 1.1
* Uses the same TCP connection to send and receive data from client and server (multiplex)
* Server Push
* Headers are minified
* Less network traffic
* Faster proccess

---

## Communication models

### API "unary"

A Client send a request to Server and receive a unique response
```
       | ----request---> |
Client |                 | Server
       | <---response--- |
```

### API "Server streaming"

A client send a request to Server and receive multiple responses (in batches)

```
       | ----request---> |
       | <---response--- |
Client | <-------------- | Server
       | <-------------- |
       | <-------------- |
```

### API "Client streaming"

A Client send multiple requests to Server (in batches) and when the Server receives everything it sends a response back to Client
```
       | ----request---> |
       | --------------> |
Client | --------------> | Server
       | <---response--- |
       | <-------------- |
       | <-------------- |
```

### API "Bi directional streaming"

A Client can send multiple requests (streaming) to the Server which returns multiple responses (streaming) to the Client
```
       | ----request---> |
       | --------------> |
Client | --------------> | Server
       | --------------> |
       | <---response--- |
```

## REST vs gRPC

* Text / JSON `vs` Protocol Buffers
* Unidirectional `vs` Bidirectional and assync
* High latency `vs` Low latency
* No strict contract (more chances of errors) `vs` Pre-define contracts (.proto)
* No streaming support (Request / Response) `vs` Streaming support
* Pre-defined design `vs` Design is not pre-defined
* Third-party libraries `vs` Auto-generated code

## Plugins for GO
* *Protoc Gen Go* is a plugin that will read the proto files and generate all files.
* *Protoc Gen Go gRPC* is a compiler for protocol buffer v3.

```bash
protoc --go_out=. --go_opt=module=github.com/marciobera/devlab/grpc/grpc-go --go-grpc_out=. --go-grpc_opt=module=github.com/marciobera/devlab/grpc/grpc-go helloworld/proto/helloworld.proto
```

# Wire Format

Docs: https://protobuf.dev/programming-guides/encoding/

```bash
protoc --encode=helloworld.GreetRequest helloworld.proto < request.txt > wire_format.bin
```

Decoder: https://protobuf-decoder.netlify.app/


# Proto definitions

## Enum
When adding `option allow_alias = true;` it allows using the key or value of it in the request.

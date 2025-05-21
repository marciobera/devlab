# gRPC

Docs: https://grpc.io/docs/languages/go/quickstart/

```bash
protoc --go_out=. --go_opt=module=github.com/marciobera/devlab/grpc/grpc-go --go-grpc_out=. --go-grpc_opt=module=github.com/marciobera/devlab/grpc/grpc-go helloworld/proto/helloworld.proto
```

# Wire Format

Docs: https://protobuf.dev/programming-guides/encoding/

```bash
protoc --encode=helloworld.GreetRequest helloworld.proto < request.txt > wire_format.bin
```

Decoder: https://protobuf-decoder.netlify.app/

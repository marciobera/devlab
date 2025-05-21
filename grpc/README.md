# gRPC

Docs: https://grpc.io/docs/languages/go/quickstart/

```bash
protoc --go_out=. --go_opt=module=github.com/marciobera/devlab/grpc/grpc-go --go-grpc_out=. --go-grpc_opt=module=github.com/marciobera/devlab/grpc/grpc-go helloworld/proto/helloworld.proto
```

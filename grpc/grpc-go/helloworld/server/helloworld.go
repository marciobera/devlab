package main

import (
	"context"
	"log"

	pb "github.com/marciobera/devlab/grpc/grpc-go/helloworld/proto"
)

func (s *Server) SayHello(ctx context.Context, request *pb.HelloRequest) (*pb.HelloReply, error) {
	log.Printf("greet call received")
	return &pb.HelloReply{
		Message: "Hello, " + request.Name,
	}, nil
}

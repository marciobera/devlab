package main

import (
	"log"
	"net"

	pb "github.com/marciobera/devlab/grpc/grpc-go/helloworld/proto"
	"google.golang.org/grpc"
)

type Server struct {
	pb.UnimplementedGreeterServer
}

func main() {
	lis, err := net.Listen("tcp", "0.0.0.0:8080")

	if err != nil {
		log.Fatal("Failed to start server")
	}

	log.Printf("Listening on port 8080")

	s := grpc.NewServer()
	pb.RegisterGreeterServer(s, &Server{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}
}

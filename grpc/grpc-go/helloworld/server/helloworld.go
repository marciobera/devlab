package main

import (
	"context"
	"fmt"
	"log"

	pb "github.com/marciobera/devlab/grpc/grpc-go/helloworld/proto"
)

func (s *Server) SayHello(ctx context.Context, request *pb.HelloRequest) (*pb.HelloReply, error) {
	log.Printf("greet call received")
	return &pb.HelloReply{
		Message: "Hello, " + request.Name,
	}, nil
}

func (s *Server) Greet(xtc context.Context, request *pb.GreetRequest) (*pb.GreetReply, error) {
	messages := make(map[string]string)
	for _, user := range request.GetUsers() {
		var greeting string
		switch request.GetType() {
			case pb.GreetingType_FORMAL:
				greeting = fmt.Sprintf("Good day, %s! Welcome to our system.", user.GetName())
			case pb.GreetingType_INFORMAL:
				greeting = fmt.Sprintf("Hey %s! Glad to see you here.", user.GetName())
			default:
				greeting = fmt.Sprintf("Hello %s.", user.GetName())
		}

		if user.IsActive != nil {
			if user.GetIsActive() {
				greeting += " It's great to know you're active."
			} else {
				greeting += " Looks like you're currently inactive."
			}
		}

		if user.BirthYear != nil {
			greeting += fmt.Sprintf(" Birth Year: %d", user.GetBirthYear())
		}
		messages[user.GetName()] = greeting;
	}

	return &pb.GreetReply{
		Messages: messages,
	}, nil
}

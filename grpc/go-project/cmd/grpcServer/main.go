package main

import (
	"database/sql"
	"net"

	"github.com/marciobera/devlab/grpc/go-project/internal/database"
	"github.com/marciobera/devlab/grpc/go-project/internal/pb"
	"github.com/marciobera/devlab/grpc/go-project/internal/service"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./db.sqlite")
	if err != nil {
		panic(err)
	}
	defer db.Close()

	categoryDb := database.NewCategory(db)
	categoryService := service.NewCategoryService(*categoryDb)

	grpcServer := grpc.NewServer()
	pb.RegisterCategoryServiceServer(grpcServer, categoryService)
	reflection.Register(grpcServer)

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		panic (err)
	}

	if err := grpcServer.Serve(lis); err != nil {
		panic(err)
	}
}

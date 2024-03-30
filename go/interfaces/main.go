package main

import "fmt"

type BankAccount interface {
	GetBalance() int
	Deposit(amount int)
	Withdraw(amount int) error
}

func main() {
	myAccounts := []BankAccount{
		NewMonzo(),
		NewBitcoin(),
	}

	for _, account := range myAccounts {
		account.Deposit(500)
		if err := account.Withdraw(70); err != nil {
			panic(err)
		}
		currentBalance := account.GetBalance()
		fmt.Printf("balance: %d\n", currentBalance)
	}

}

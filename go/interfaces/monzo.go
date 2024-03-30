package main

import "errors"

type Monzo struct {
	balance int
}

func NewMonzo() *Monzo {
	return &Monzo{
		balance: 0,
	}
}

func (m *Monzo) GetBalance() int {
	return m.balance
}

func (m *Monzo) Deposit(amount int) {
	m.balance += amount
}

func (m *Monzo) Withdraw(amount int) error {
	newBalance := m.balance - amount
	if newBalance < 0 {
		return errors.New("insufficient funds")
	}
	m.balance = newBalance
	return nil
}

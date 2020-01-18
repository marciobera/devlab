<?php

/**
 * Order
 * 
 * An example of order class
 */
class Order
{
    /** @var int                Quantity */
    public $quantity;

    /** @var float              Price */
    public $unitPrice;

    /** @var int                Amount */
    public $amount = 0;

    /** @var PaymentGateway     Payment gateway dependency */
    protected $gateway;

    /**
     * Constructor
     *
     * @param PaymentGateway $gateway
     */
    public function __construct(PaymentGateway $gateway, int $quantity = null, float $unitPrice = null)
    {
        $this->gateway = $gateway;
        $this->quantity = $quantity;
        $this->unitPrice = $unitPrice;
        $this->amount = $quantity * $unitPrice;
    }

    /**
     * Process the order
     */
    public function process()
    {
        return $this->gateway->charge($this->amount);
    }

    /**
     * Charge the total amount
     * 
     * @param PaymentGateway $gateway Payment gateway object
     * @return void
     */
    public function chargeAmount(PaymentGateway $gateway)
    {
        $gateway->charge($this->amount);
    }
}
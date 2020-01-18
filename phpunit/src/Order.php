<?php

/**
 * Order
 * 
 * An example of order class
 */
class Order
{
    /** @var int                Amount */
    public $amount = 0;

    /** @var PaymentGateway     Payment gateway dependency */
    protected $gateway;

    /**
     * Constructor
     *
     * @param PaymentGateway $gateway
     */
    public function __construct(PaymentGateway $gateway)
    {
        $this->gateway = $gateway;
    }

    /**
     * Process the order
     */
    public function process()
    {
        return $this->gateway->charge($this->amount);
    }
}
<?php

use PHPUnit\Framework\TestCase;

class OrderTest extends TestCase
{
    public function tearDown(): void
    {
        Mockery::close();
    }

    public function testOrderIsProcessed()
    {
        $gateway = $this->getMockBuilder('PaymentGateway')
                        ->setMethods(['charge'])
                        ->getMock();

        $gateway->expects($this->once())
                ->method('charge')
                ->with($this->equalTo(200))
                ->wilLReturn(true);
        
        $order = new Order($gateway);
        $order->amount = 200;
        $this->assertTrue($order->process());
    }

    public function testOrderIsProcessedUsingMockery()
    {
        $gateway = Mockery::mock('PaymentGateway');
        $gateway->shouldReceive('charge')
                ->once()
                ->with(200)
                ->andReturn(true);
                
        $order = new Order($gateway);
        $order->amount = 200;
        $this->assertTrue($order->process());
    }

    public function testOrderIsProcessedUsingAMock()
    {
        $mockGateway = Mockery::mock('PaymentGateway');
        
        $order = new Order($mockGateway, 3, 1.99);

        $this->assertEquals(5.97, $order->amount);

        $mockGateway->shouldReceive('charge')
        ->once()
        ->with(5.97);
        
        $order->chargeAmount($mockGateway);
    }

    public function testOrderIsProcessedUsingASpy()
    {
        // Just used to inject in the constructor
        $mockGateway = Mockery::mock('PaymentGateway');
        $order = new Order($mockGateway, 3, 1.99);

        $this->assertEquals(5.97, $order->amount);

        $spyGateway = Mockery::spy('PaymentGateway');
        $order->chargeAmount($spyGateway);

        $spyGateway->shouldHaveReceived('charge')
                   ->once()
                   ->with(5.97);
    }
}
<?php

use PHPUnit\Framework\TestCase;

class MockTest extends TestCase
{
    public function testMock()
    {

        $mockMailer = $this->createMock(Mailer::class);
        $mockMailer->method('sendMessage')
                     ->willReturn(true);

        $result = $mockMailer->sendMessage('marcio@example.com', 'Hello');

        $this->assertTrue($result);
    }
}
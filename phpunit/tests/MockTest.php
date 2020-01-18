<?php

use PHPUnit\Framework\TestCase;

class MockTest extends TestCase
{
    public function testMock()
    {

        $mockedMailer = $this->createMock(Mailer::class);
        $mockedMailer->method('sendMessage')
                     ->willReturn(true);

        $result = $mockedMailer->sendMessage('marcio@example.com', 'Hello');

        $this->assertTrue($result);
    }
}
<?php

use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    public function testReturnsFullName()
    {
        $user = new User;

        $user->first_name = "Teresa";
        $user->surname = "Green";

        $this->assertEquals('Teresa Green', $user->getFullName());
    }

    public function testFullNameIsEmptyByDefault()
    {
        $user = new User;

        $this->assertEquals('', $user->getFullName());
    }

    /**
     * @test
     */
    public function userHasFirstName()
    {
        $user = new User;
        
        $user->first_name = 'Teresa';

        $this->assertEquals('Teresa', $user->first_name);
    }

    public function testNotificationIsSent()
    {
        $mockMailer = $this->createMock(Mailer::class);
        $mockMailer->method('sendMessage')
                   ->willReturn(true);
        
        $user = new User;
        $user->setMailer($mockMailer);
        $user->email = 'marcio@example.com';    
        
        $this->assertTrue($user->notify('Hello'));
    }
}
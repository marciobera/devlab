<?php

use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    public function tearDown(): void
    {
        Mockery::close();
    }

    /**
    * @runInSeparateProcess
    * @preserveGlobalState disabled
    */
    public function testNotifyReturnsTrue()
    {
        $user = new App\User('marcio@example.com');

        $mock = Mockery::mock('alias:Mailer');
        $mock->shouldReceive('send')
             ->once()
             ->with($user->email, 'Hello!')
             ->andReturn(true);

        $this->assertTrue($user->notify('Hello!'));
    }
}
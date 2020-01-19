<?php

use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    public function testNotifyReturnsTrue()
    {
        $user = new App\User('marcio@example.com');

        // $mailer = $this->createMock(App\Mailer::class);
        $user->setMaileCallable(static function() {
            echo 'mocked';

            return true;
        });
        
        $this->assertTrue($user->notify('Hello!'));
    }
}
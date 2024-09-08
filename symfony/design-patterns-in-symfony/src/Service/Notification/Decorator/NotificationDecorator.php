<?php
namespace App\Service\Notification\Decorator;

use App\Service\Notification\Contract\NotificationInterface;

class NotificationDecorator implements NotificationInterface
{
    public function __construct(
        private readonly NotificationInterface $notification
    ) {
    }

    public function send(string $message): string
    {
        $this->notification->send($message);
    }
}

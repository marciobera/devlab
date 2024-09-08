<?php

namespace App\Service\Notification\Contract;

interface NotificationInterface
{
    public function send(string $message): string;
}

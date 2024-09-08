<?php

namespace App\Service\Notification\Notifier;

use App\Service\Notification\Contract\NotificationInterface;

final class FacebookNotifier implements NotificationInterface
{
    public function send(string $message): string
    {
        dump($message);
        return "Faceook: " . $message;
    }
}

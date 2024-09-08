<?php

namespace App\Service\Notification\Notifier;

use App\Service\Notification\Contract\NotificationInterface;

final class SlackNotifier implements NotificationInterface
{
    public function send(string $message): string
    {
        dump($message);
        return "Slack: " . $message;
    }
}

<?php

namespace App\Service\Notification\Decorator;

use App\Service\Notification\Contract\NotificationInterface;
use Symfony\Component\HttpKernel\Log\Logger;

class NotificationWithLoggingDecorator implements NotificationInterface
{
    public function __construct(
        private readonly NotificationInterface $notification,
        private readonly Logger $logger
    ) {
    }
    public function send(string $message): string
    {
        $this->log($message);
        return $this->notification->send($message);
    }

    public function log(string $message): void
    {
        $this->logger->info("LOGGER: " . $message);
    }
}

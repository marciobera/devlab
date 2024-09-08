<?php

namespace App\Controller;

use App\Service\Notification\Contract\NotificationInterface;
use App\Service\Notification\Decorator\NotificationWithLoggingDecorator;
use App\Service\Notification\Notifier\EmailNotifier;
use App\Service\Notification\Notifier\SlackNotifier;
use App\Service\Notification\Notifier\FacebookNotifier;
use App\Service\Notification\Notifier\SmsNotifier;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class NotificationController extends AbstractController
{
    public function __construct(
        #[
            Autowire(service: EmailNotifier::class)
        ]
        private NotificationInterface $emailNotification,
        #[
            Autowire(service: SmsNotifier::class)
        ]
        private NotificationInterface $smsNotification,
        #[
            Autowire(service: SlackNotifier::class)
        ]
        private NotificationInterface $slackNotification,
        #[
            Autowire(service: FacebookNotifier::class)
        ]
        private NotificationInterface $facebookNotification,
        private LoggerInterface $logger
    ) {
    }
    #[Route(path: "/send/notifications", name: "send_notifications")]
    public function decoratorPattern(): Response
    {
        $this->emailNotification->send(
            'hi!!! you have been sent an email, don\'t reply, because we never read them.'
        );
        $this->smsNotification->send(
            'hi!!! you have been sent a sms, don\'t reply, because we never read them.'
        );
        $this->slackNotification->send(
            'hi!!! you have been sent a slack, don\'t reply, because we never read them.'
        );
        $this->facebookNotification->send(
            'hi!!! you have been sent a facebook, don\'t reply, who\'s on there?.'
        );

        $loggedEmail = new NotificationWithLoggingDecorator(
            notification: $this->emailNotification,
            logger: $this->logger
        );
        $loggedEmail->send("hello, email sending with logging");

        $loggedSlackMesage = new NotificationWithLoggingDecorator(
            notification: $this->slackNotification,
            logger: $this->logger
        );
        $loggedSlackMesage->send("logging with slack");

        return $this->render("notification/index.html.twig");
    }
}

<?php

namespace App\Controller;

use App\Service\Mailer\Facade\MailerFacade;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class PaymentController extends AbstractController
{
    public function __construct(private readonly MailerFacade $mailerFacade)
    {
    }

    #[Route(path: "/send/email", name: "payment_send_email")]
    public function facadeDesignPattern(): Response
    {
        $this->mailerFacade->sendWelcomeEmail(
            recipient: "bob@example.com",
            name: "Bob"
        );
        return $this->render("notification/index.html.twig");
    }
}

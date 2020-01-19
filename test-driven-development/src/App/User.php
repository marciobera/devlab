<?php

namespace App;

use App\Mailer;

/**
 * User
 * 
 * An example user class
 */
class User
{
    /** @var string         Email address */
    public $email;

    /** @var Mailer         Mailer */
    protected $mailer;

    /**
     * Constructor
     *
     * @param string $email The user's email
     * @return void
     */
    public function __construct($email)
    {
        $this->email = $email;
    }

    /**
     * Send the user a message
     *
     * @param string $message The message
     * @return boolean
     */
    public function notify(string $message)
    {
        return $this->mailer::send($this->email, $message);
    }

    /**
     * Set the Mailer service
     *
     * @param Mailer $mailer
     * @return void
     */
    public function setMailer(Mailer $mailer)
    {
        $this->mailer = $mailer;
    }
}
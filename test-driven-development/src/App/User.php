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

    /** @var callable|array         Mailer callable */
    protected $mailerCallable;

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
        return call_user_func($this->mailerCallable, $this->email, $message);
        // return $this->mailer::send($this->email, $message);
    }

    /**
     * Set the Mailer service
     *
     * @param Mailer $mailer
     * @return void
     */
    public function setMaileCallable(callable $mailerCallable)
    {
        $this->mailerCallable = $mailerCallable;
    }
}
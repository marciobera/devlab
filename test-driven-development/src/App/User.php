<?php

namespace App;

use Mailer;

/**
 * User
 * 
 * An example user class
 */
class User
{
    /** @var string         Email address */
    public $email;

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
        return Mailer::send($this->email, $message);
    }
}
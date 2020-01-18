<?php 

/**
 * User class
 * 
 * A user of the system
 */
class User
{
    /** @var string     First name */
    public $first_name;

    /** @var string     Last name */
    public $surname;

    /** @var string     User email */
    public $email;

    /** @var Mailer     Mailer object */
    protected $mailer;

    /**
     * Set the mailer dependency
     *
     * @param Mailer $mailer        The Mailer object
     * @return void
     */
    public function setMailer(Mailer $mailer)
    {
        $this->mailer = $mailer;
    }

    /**
     * Get the user's full name from their first name and surname
     * 
     * @return string   The user's full name
     */
    public function getFullName()
    {
        return trim($this->first_name . " " .$this->surname);
    }

    /**
     * Send the user a message
     *
     * @param string $message   The message
     * @return boolean          True if sent, false otherwise
     */
    public function notify($message)
    {
        return $this->mailer->sendMessage($this->email, $message);
    }
}
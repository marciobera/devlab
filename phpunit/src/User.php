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

    /**
     * Get the user's full name from their first name and surname
     * 
     * @return string   The user's full name
     */
    public function getFullName()
    {
        return trim($this->first_name . " " .$this->surname);
    }
}
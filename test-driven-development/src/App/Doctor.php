<?php

namespace App;

class Doctor extends AbstractPerson
{
    /**
     * Returns doctor title
     *
     * @return string
     */
    protected function getTitle()
    {
        return 'Dr.';
    }
}
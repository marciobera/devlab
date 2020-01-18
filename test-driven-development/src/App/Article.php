<?php

namespace App;

/**
 * Article
 * 
 */
class Article
{
    /** @var string Article title */
    public $title;

    public function getSlug()
    {
        $slug = $this->title;
        $slug = str_replace(' ', '_', $slug);
        return $slug;
    }
}
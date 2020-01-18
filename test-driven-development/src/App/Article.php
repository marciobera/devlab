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

    /**
     * Returns the title as slug
     *
     * @return string
     */
    public function getSlug()
    {
        $slug = $this->title;
        $slug = preg_replace('/\s+/', '_', $slug);
        $slug = trim($slug, '_');
        
        return $slug;
    }
}
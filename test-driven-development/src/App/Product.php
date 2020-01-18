<?php

namespace App;

/**
 * Product
 * 
 * An example product class
 */
class Product
{
    /** @var integer        Unique identifier */
    protected $productId;

    /**
     * Constructor
     * 
     * @return void
     */
    public function __construct()
    {
        $this->productId = rand();
    }
}
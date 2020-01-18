<?php

use PHPUnit\Framework\TestCase;

class ItemTest extends TestCase
{
    public function testDescriptionIsNotEmpty()
    {
        $item = new App\Item;
        
        $this->assertNotEmpty($item->getDescription());
    }

    public function testIDisAnInteger()
    {
        $item = new App\ItemChild;

        $this->assertIsInt($item->getID());
    }

    public function testTokenIsAString()
    {
        $this->markTestSkipped('Cannot test private methods');
        
        $item = new App\ItemChild;

        $this->assertIsString($item->getToken());
    }
}
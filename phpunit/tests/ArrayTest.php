<?php

use PHPUnit\Framework\TestCase;

class ArrayTest extends TestCase
{
    public static $array;
    
    protected function setUp()
    {
        static::$array = [];
    }
    
    public function testArrayInitiallyHasOneItem()
    {
        
        static::$array = ['one'];
        
        $this->assertNotEmpty(static::$array);
        $this->assertEquals("one", static::$array[0]);
    }
    
    public function testCanAddItemToArray() {
        
        static::$array = ['one'];
        
        static::$array[] = "two";
        
        $this->assertEquals("two", static::$array[1]);
        $this->assertCount(2, static::$array);
    }
}

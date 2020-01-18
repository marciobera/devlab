<?php

use PHPUnit\Framework\TestCase;
use Mockery\Adapter\Phpunit\MockeryTestCase;

class ExampleTest extends TestCase
{
    public function testAddingTwoPlusTwoResultsInFour()
    {
        $this->assertEquals(4, 2 + 2);
    }
}
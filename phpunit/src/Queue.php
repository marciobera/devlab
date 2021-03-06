<?php

/**
 * Queue
 * 
 * A first-in, first-out data structure
 */
class Queue
{
    /** @var integer    Maximum number of items in the queue */
    public const MAX_ITEMS = 5;

    /** @var array      Queue items */
    protected $items = [];

    /**
     * Add an item to the end of the queue
     * 
     * @param mixed $item The item
     */
    public function push($item)
    {
        if ($this->getCount() == static::MAX_ITEMS) {
            throw new QueueException('Queue is full');
        }
        
        $this->items[] = $item;
    }

    /**
     * Take an item off the head of the queue
     */
    public function pop()
    {
        return array_shift($this->items);
    }

    /**
     * Get the total number of items in the queue
     * 
     * @return integer The number of items
     */
    public function getCount()
    {
        return count($this->items);
    }

    /**
     * Clear the queue
     */
    public function clear()
    {
        $this->items = [];
    }
}
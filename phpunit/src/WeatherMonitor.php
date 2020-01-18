<?php

/**
 * Weather Monitor
 * 
 * An example class for monitoring the weather
 */
class WeatherMonitor
{
    /** @var TemperatureService Temperature service */
    protected $service;

    /**
     * Constructor
     *
     * @param TemperatureService $service Temperature service dependency
     */
    public function __construct(TemperatureService $service)
    {
        $this->service = $service;
    }

    /**
     * Get the average temperature between two times
     *
     * @param string $start     Start time hh:mm
     * @param string $end       End time hh:mm
     * @return void
     */
    public function getAverageTemperature(string $start, string $end)
    {
        $startTemp = $this->service->getTemperature($start);
        $endTemp = $this->service->getTemperature($end);

        return ($startTemp + $endTemp) / 2;
    }
}
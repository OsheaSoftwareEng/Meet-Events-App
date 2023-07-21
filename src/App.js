import React, { useEffect, useState } from 'react';
import './App.css';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allEvents = await getEvents();
      setEvents(allEvents);
      setAllLocations(extractLocations);
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <EventList events={events} />
      <CitySearch allLocations={allLocations} />
      <NumberOfEvents />
    </div>
  );
};

export default App;

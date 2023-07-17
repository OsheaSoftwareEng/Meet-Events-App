import React from 'react';
import './App.css';
import { EventList } from './components/EventList';
import { CitySearch } from './components/CitySearch';

export const App = () => {
  return (
    <div className='App'>
      <EventList />
      <CitySearch />
    </div>
  );
};

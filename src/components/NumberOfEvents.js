import { useState } from 'react';

const NumberOfEvents = () => {
  const [eventNumber, setEventNumber] = useState(32);

  const handleInputChanged = (value) => {
    setEventNumber(value);
  };

  return (
    <div id='event-number'>
      <input
        type='text'
        className='textbox'
        placeholder='enter a number'
        value={eventNumber}
        onChange={(e) => handleInputChanged(e.target.value)}
      />
    </div>
  );
};

export default NumberOfEvents;

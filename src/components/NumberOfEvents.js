import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
  //   const [eventNumber, setEventNumber] = useState(32);
  const [query, setQuery] = useState(32);

  const handleInputChanged = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    setCurrentNOE(inputValue);
  };

  return (
    <div id='event-number'>
      <input
        type='text'
        className='textbox'
        placeholder='enter a number'
        value={query}
        onChange={handleInputChanged}
      />
    </div>
  );
};

export default NumberOfEvents;

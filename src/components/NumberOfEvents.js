import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [query, setQuery] = useState(32);

  const handleInputChanged = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    setCurrentNOE(inputValue);

    let infoError;
    if (isNaN(query)) {
      infoError = 'you can only use positive numbers';
    } else {
      infoError = '';
    }
    setErrorAlert(infoError);
  };

  return (
    <div id='event-number'>
      <label className='city-label'>Set number of events</label>
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

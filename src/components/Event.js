import { useState } from 'react';
import mockData from '../mock-date';

const Event = () => {
  const [showDetails, setShowDetails] = useState(false);
  const event = mockData;

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <li>
        <p>{event[0].location}</p>
        <p>{event[0].summary}</p>
        <p>{event[0].created}</p>
        {/* <p>{event[0].description}</p> */}
        {showDetails ? <p>{event[0].description}</p> : null}
      </li>
      <button onClick={toggleDetails} className='show-details'>
        Show Details
      </button>
    </>
  );
};

export default Event;

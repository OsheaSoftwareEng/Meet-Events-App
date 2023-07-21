import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  //   const event = mockData;

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <li>
        <p>{event.location}</p>
        <p>{event.summary}</p>
        <p>{event.created}</p>
        {showDetails ? <p>{event.description}</p> : null}
      </li>
      <button onClick={toggleDetails} className='show-details'>
        Show Details
      </button>
    </>
  );
};

export default Event;

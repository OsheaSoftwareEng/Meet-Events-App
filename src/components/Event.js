import { useState } from 'react';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  //   const event = mockData;

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <li className='event'>
        <p className='location'>{event.location}</p>
        <p className='summary'>{event.summary}</p>
        <p className='created'>{event.created}</p>
        {showDetails ? (
          <p data-testid='event-details' className='des-info'>
            {event.description}
          </p>
        ) : null}
        <button
          data-testid='details-btn'
          onClick={toggleDetails}
          className='show-details details-btn'
        >
          Show Details
        </button>
      </li>
    </>
  );
};

export default Event;

import { useState } from 'react';
import 'animate.css';

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <li className='event'>
        <p className='location'>{event.location}</p>
        <p className='summary'>{event.summary}</p>
        <p className='created'>{formatDate(event.created)}</p>
        {showDetails ? (
          <p
            data-testid='event-details'
            className='des-info animate__animated animate__fadeIn'
          >
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

export const formatDate = (isoDate) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  };
  const formattedDate = new Date(isoDate).toLocaleDateString('en-US', options);
  return formattedDate;
};

export default Event;

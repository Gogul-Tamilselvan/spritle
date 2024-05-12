import { useState, useEffect } from 'react';

function useMonitor() {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const handleEventUpdate = async (event) => {
      if (!event.target.status === 200) {
        // Handle non-200 status codes (errors)
        return;
      }
      const data = await event.target.json();
      setEventData(data);
    };

    window.addEventListener('fetch', handleEventUpdate);

    return () => window.removeEventListener('fetch', handleEventUpdate);
  }, []);

  return eventData;
}

export default useMonitor;
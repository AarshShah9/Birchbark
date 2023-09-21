import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const CalendarWrapper: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true only on the client-side
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && <DynamicScheduler />}
    </>
  );
};

const DynamicScheduler = dynamic(() => import('~/components/Calendar/index'), {
  ssr: false,
});

export default CalendarWrapper;

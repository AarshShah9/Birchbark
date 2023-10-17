import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const SchedulerWrapper: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true only on the client-side
    setIsClient(true);
  }, []);

  return (
    <div className='h-full'>
      {isClient && <DynamicScheduler />}
    </div>
  );
};

const DynamicScheduler = dynamic(() => import('~/components/Scheduler/index'), {
  ssr: false,
});

export default SchedulerWrapper;

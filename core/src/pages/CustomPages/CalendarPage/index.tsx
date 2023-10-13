import React from 'react';
import Layout from "~/components/Layout";
import SchedulerWrapper from '~/components/SchedulerWrapper';

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <div>
                {/* <CalendarWrapper /> */}
                <SchedulerWrapper/>
                
            </div>
            <div className='border bg-red-500 w-44 h-44'>
                Test
            </div>
        </Layout>
    );
};

export default IndexPage;

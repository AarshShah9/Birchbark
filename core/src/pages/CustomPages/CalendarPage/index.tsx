import React from 'react';
import Head from 'next/head';
import Layout from "~/components/Layout";
import Calendar from "~/components/Calendar";
import CalendarWrapper from "~/components/CalendarWrapper";
import dynamic from 'next/dynamic';
import SchedulerWrapper from '~/components/SchedulerWrapper';

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <main>
                {/* <CalendarWrapper /> */}
                <SchedulerWrapper/>
            </main>
        </Layout>
    );
};

export default IndexPage;

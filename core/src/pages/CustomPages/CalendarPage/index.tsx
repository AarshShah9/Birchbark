import React from 'react';
import Head from 'next/head';
import Layout from "~/components/Layout";
import Calendar from "~/components/Calendar";
import dynamic from 'next/dynamic';

const DynamicScheduler = dynamic(() => import('~/components/Calendar/index'), {
    ssr: false, // Ensure this component is not loaded during server-side rendering
});

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <main>
                <Calendar event1="Event 1" event2="Event 2" />
            </main>
        </Layout>
    );
};

export default IndexPage;

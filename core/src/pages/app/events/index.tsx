import { api } from "~/utils/api";
import Link from "next/link";
import React from "react";
import Layout from "~/components/Layout";

const EventsMain: React.FC = () => {
  const { data, error, isLoading } = api.events.getAllUpcomingEvents.useQuery();
  console.log("EVENT DATA:\n" + data);

  return (
    <Layout>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <ul>
            {data.map((event) => (
              <li key={event.id}>
                <Link href={`app/events?eventId=${event.id}`}>
                  <a>
                    <h3>{event.title}</h3>
                    <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                    {event.imageUrl && (
                      <img src={event.imageUrl} alt={event.title} />
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
};

export default EventsMain;

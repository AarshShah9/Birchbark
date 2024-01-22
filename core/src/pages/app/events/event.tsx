import { useRouter } from "next/router";
import { api } from "~/utils/api";
import React from "react";
import Layout from "~/components/Layout";

const EventPage: React.FC = () => {
  const router = useRouter();
  const id = router.query.eventId;

  const { data: eventData } = api.events.getEventById.useQuery({
    // id: Number(id),
    id: Number(1)
  });

  if (!eventData) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }


  return (
    <Layout>
      <div>
        <h1>{eventData.title}</h1>
        <p>{eventData.date.getDate()}</p>
        {eventData.content.map((block: any, index: number) => {
          switch (block.type) {
            case "TEXT":
              return <p key={index}>{block.value}</p>;
            case "IMAGE":
              return <img key={index} src={block.value} alt="" />;
            case "VIDEO":
              return (
                <iframe
                  key={index}
                  width="560"
                  height="315"
                  src={block.value}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              );
            default:
              return null;
          }
        })}
      </div>
    </Layout>
  );
};

export default EventPage;

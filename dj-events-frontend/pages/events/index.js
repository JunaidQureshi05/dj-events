import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem kry={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

const serializer = (data) =>
  data.map((item) => ({ uuid: item.id, ...item.attributes }));

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events?populate=*`);
  const { data } = await res.json();
  return {
    props: {
      events: serializer(data) || [],
      revalidate: 1,
    },
  };
}

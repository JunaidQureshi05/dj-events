import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import Link from "next/link";
import { API_URL } from "@/config/index";

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem kry={evt.uuid} evt={evt} />
      ))}
      {events.length > 0 && <Link href="/events">View All Events</Link>}
    </Layout>
  );
}

const serializer = (data) =>
  data.map((item) => ({ uuid: item.id, ...item.attributes }));

export async function getStaticProps() {
  const res = await fetch(
    `${API_URL}/api/events?populate=*&_sort=date:ASC&pagination[pageSize]=3`
  );
  const { data } = await res.json();
  console.log(data);
  console.log(">>>>>>>", serializer(data));
  return {
    props: {
      events: serializer(data) || [],
      revalidate: 1,
    },
  };
}

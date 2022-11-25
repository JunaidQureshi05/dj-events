import React from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const EventPage = () => {
  const router = useRouter();
  return <Layout>My Event</Layout>;
};

export default EventPage;

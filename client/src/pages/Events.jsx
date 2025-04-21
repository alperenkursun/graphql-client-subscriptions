import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_EVENTS } from "../graphql/queries";
import Event from "../components/event/Event";

function Events() {
  const { loading, error, data } = useQuery(GET_ALL_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Events</h1>
      <div className="events">
        {data.events.map((event, index) => (
          <Event
            key={index}
            id={event.id}
            name={event.title}
            desc={event.desc}
            date={event.date}
          />
        ))}
      </div>
    </>
  );
}

export default Events;

import { getFilteredEvents } from "@/dummy-data"
import { useRouter } from "next/router"
import Head from "next/head";


import ResultsTitle from "@/components/results-title/results-title";
import EventList from "@/components/event-list/EventList";

const Detail = () => {
  const route = useRouter();

  const filterDate = route.query.slug

  if (!filterDate) {
    return <p className="center">Loading...</p>
  }

  const yearNum = parseInt(filterDate[0]);
  const monthNum = parseInt(filterDate[1]);

  const filteredEvents = getFilteredEvents({year:filterDate[0], month:filterDate[1]});

  return (
    <>
    <Head>
      <title>
        Filtered Events
      </title>
      <meta name="description" content={`All events for ${monthNum}/${yearNum}`} />
    </Head>
    {!filteredEvents ?
      <p>No event found for the chosen filter</p>
      : (
        <div>
          <h1>
            Filter event
          </h1>
          <ResultsTitle date={new Date(yearNum, monthNum - 1)} />
          <EventList items={filteredEvents} />
        </div>
    )}
    </>
  )
}

export default Detail
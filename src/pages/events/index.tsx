import { useRouter } from "next/router";

import { getAllEvents } from "@/dummy-data"
import EventList from './../../components/event-list/EventList';
import EventSearch from './../../components/event-search/EventSearch';

const Events = () => {
  const events = getAllEvents();
  const router = useRouter()
  
  const findEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath)
  }

  return (
    <>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </>
  )
}

export default Events
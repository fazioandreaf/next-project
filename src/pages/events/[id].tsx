import { useRouter } from "next/router"
import EventDetails from './../../components/EventDetails/EventDetails'

import { getEventById } from "@/dummy-data";

const Detail = () => {
  const router = useRouter();

  const event = getEventById(router.query.id)

  if (!event) {
    return <p>
      Event not found!
    </p>
  }

  return (
    <div>
      <h1>
        Events Detail
      </h1>
      <EventDetails event={event} />
    </div>
  )
}

export default Detail
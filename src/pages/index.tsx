import styles from '@/styles/Home.module.css'

import {getFeaturedEvents} from '../dummy-data'
import EventList from './../components/event-list/EventList';

export default function Home() {

  const featureEvents = getFeaturedEvents();

  return (
    <div className={styles.main}>
      <EventList items={featureEvents} />
    </div>
  )
}

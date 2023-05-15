import EventItem from '../event-item/EventItem';

import styles from './EventList.module.scss';

const EventList = ({items}) => {
	return (
		<ul className={styles['event-list']}>
			{items.map((item) => {
				return <EventItem key={item.id} item={item} />;
			})}
		</ul>
	);
};

export default EventList;

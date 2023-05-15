import Link from 'next/link';

import styles from './EventItem.module.scss';

const EventItem = (props) => {
	const {title, image, date, location, id} = props.item;
	console.log(props);
	const humanReadableData = new Date(date).toLocaleDateString('it-IT', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const formattedAddress = location.replace(', ', '/n');

	const exploreLink = `/events/'${id}`;
	return (
		<li className={styles['event-item--li']}>
			<img src={image} alt={title} className={styles['event-item--img']} />
			<div className={styles['event-item--content']}>
				<h2 className={styles['event-item--h2']}>{title}</h2>
				<div>
					<time className={styles['event-item--time']}>{humanReadableData}</time>
				</div>
				<address className={styles['event-item--address']}>{formattedAddress}</address>
			</div>
			<div className={styles['event-item--link']}>
				<Link href={exploreLink}>Explore event</Link>
			</div>
		</li>
	);
};

export default EventItem;

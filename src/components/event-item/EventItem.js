import DateIcon from './../../../public/icons/date-icon';
import ArrowRightIcon from './../../../public/icons/arrow-right-icon';
import AddressIcon from './../../../public/icons/address-icon';
import Image from 'next/image';

import Button from './../Button';

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

	const exploreLink = `/events/${id}`;
	return (
		<li className={styles['event-item--li']}>
			<Image src={image} alt={title} className={styles['event-item--img']} />
			<div className={styles['event-item--content']}>
				<h2 className={styles['event-item--h2']}>{title}</h2>
				<div>
					<DateIcon />
					<time className={styles['event-item--time']}>{humanReadableData}</time>
				</div>
				<div className={styles['event-item--address']}>
					<AddressIcon />
					<address>{formattedAddress}</address>
				</div>
			</div>
			<div className={styles['event-item--link']}>
				<Button href={exploreLink}>
					Explore event
					<ArrowRightIcon />
				</Button>
			</div>
		</li>
	);
};

export default EventItem;

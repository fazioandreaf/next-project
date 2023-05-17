import EventContent from './event-content';
import EventLogistic from './event-logistics';
import EventSummary from './event-summary';

const EventDetails = ({event}) => {
	const {title, date, image, location, description} = event;
	return (
		<>
			<EventSummary title={title} />
			<EventLogistic date={date} address={location} image={image} imageAlt={title} />
			<EventContent>
				<p>{description}</p>
			</EventContent>
		</>
	);
};

export default EventDetails;

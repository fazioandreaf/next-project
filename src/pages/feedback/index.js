import {getFeedbackData} from './../api/feedback';

export default function Feedback({feedbackItems}) {
	return (
		<ul>
			{feedbackItems.map((elem) => (
				<li key={elem.id}>elem.feedback</li>
			))}
		</ul>
	);
}

export async function getStaticProps() {
	return {
		props: {
			feedbackItems: getFeedbackData(),
		},
	};
}

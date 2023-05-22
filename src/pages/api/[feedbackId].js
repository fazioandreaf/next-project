import {getFeedbackFiltered} from './../api/feedback';

function handler(req, res) {
	const feedbackData = getFeedbackFiltered(req.query.feedbackId);

    res.status(200).json({feedback: feedbackData})
}

export default handler;

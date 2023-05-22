// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs";
import path from "path";

type Data = {
  id?: string | number;
  feedback: string | object,
  email?: string,
  message?: string
}

const filePathFeedback = path.join(process.cwd(), 'data', 'feedback.json' )

export const getFeedbackData = (path?: string) => {
  const pathTemp = !!path ? path : filePathFeedback;

  return JSON.parse(fs.readFileSync(pathTemp));
};

export const getFeedbackFiltered = (feedbackId: string | number) => {
  const feedbackData = getFeedbackData();

  return feedbackData.find((elem: Data) => elem.id = feedbackId)
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const emailReq= req.body.email;
    const feedbackReq= req.body.feedback;

    const newFeedback = {
      id: new Date().toISOString(),
      email: emailReq,
      feedback: feedbackReq,
    }

    const fileData = getFeedbackData(filePathFeedback);
    fileData.push(newFeedback);
    fs.writeFileSync(filePathFeedback, JSON.stringify(fileData))
    res.status(201).json({message: 'Success!', feedback: newFeedback})
  } else {
    res.status(201).json(getFeedbackData(filePathFeedback))
  }
}

import { NextApiRequest, NextApiResponse } from "next";

const me = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'From Api Route' });
}

export default me;
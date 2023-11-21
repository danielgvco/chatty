import { NextApiRequest, NextApiResponse } from 'next';

export async function getBody(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;
    res.status(200).json({ body });
}
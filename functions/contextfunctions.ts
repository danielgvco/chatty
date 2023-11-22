import { NextApiRequest, NextApiResponse } from 'next';

export async function getBody(req: NextApiRequest, res: NextApiResponse) {
    const body = req.body;
    res.status(200).json({ body });
}

export function getCurrentDateTime(): string {
    const currentDateTime = new Date();
    return currentDateTime.toLocaleString('en-US', {
        timeZone: 'America/Vancouver',
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}
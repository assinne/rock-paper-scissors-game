import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    console.log(req.method)
    console.log(req.headers)
    res.status(200).json({ name: 'Nothing to see here' })
}

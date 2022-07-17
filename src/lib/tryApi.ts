import * as Next from "next"
import * as IResponse from '~/interfaces/response'

export type Request = Next.NextApiRequest
export type Response = Next.NextApiResponse<IResponse.Json>
export type Function = (req: Request, res: Response) => Promise<IResponse.Json>

export async function get(req: Request, res: Response, fn: Function): Promise<boolean> {
    if (req.method !== 'GET') {
        return false
    }
    await tryApi(req, res, fn)
    return true;
}

export async function post(req: Request, res: Response, fn: Function): Promise<boolean> {
    if (req.method !== 'POST') {
        return false
    }
    await tryApi(req, res, fn)
    return true
}

export async function deletes(req: Request, res: Response, fn: Function): Promise<boolean> {
    if (req.method !== 'DELETE') {
        return false
    }
    await tryApi(req, res, fn)
    return true
}

export function unsupported(req: Request, res: Response) {
    res.status(200).json({
        error: {
            code: 405,
            message: `Method ${req.method} not supported.`
        }
    })
}

async function tryApi(req: Request, res: Response, fn: Function): Promise<void> {
    try {
        const data = await fn(req, res)
        res.status(200).json(data)
    } catch (error: any) {
        // Api error code OR node response error code OR 500
        const code = error.code || error.response?.code || 500
        res.status(200).json({ error: { code: code, message: error.message } })
    }
}

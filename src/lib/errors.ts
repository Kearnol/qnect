export class Api extends Error {
    constructor(readonly code: number, message: string) {
        super(message)
        // Error.captureStackTrace(this, Api)
    }
}

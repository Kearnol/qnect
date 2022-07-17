import * as PostModel from '~/models/post'

export type Post = Json<PostModel.IPost>

export type Json<T = any> = {
    apiVersion?: string
    context?: string
    id?: string
    params?: {
        id?: string
    }
    data?: {
        kind?: string
        etag?: string
        id?: string
        lang?: string
        updated?: string // RFC 3339 formatted date
        deleted?: boolean
        currentItemCount?: number
        itemsPerPage?: number
        startIndex?: number
        totalItems?: number
        pageIndex?: number
        totalPages?: number
        [key: string]: any
        item?: T | null
        items?: T[]
    }
    error?: {
        code?: number
        message?: string
        errors?: [{
            domain?: string
            reason?: string
            message?: string
            location?: string
            locationType?: string
            extendedHelp?: string
            sendReport?: string
        }]
    }
}

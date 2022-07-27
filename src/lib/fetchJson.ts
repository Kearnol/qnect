import * as IResponse from '~/interfaces/response'

export async function get<T = any>(url: RequestInfo): Promise<IResponse.Json<T>> {
    const res = await fetch(url)
    return await res.json()
}

export async function post<T = any>(url: RequestInfo, item: any): Promise<IResponse.Json<T>> {
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
    })
    return await res.json()
}

export async function deletes<T = any>(url: RequestInfo, item: any): Promise<IResponse.Json<T>> {
    const res = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
    })
    return await res.json()
}

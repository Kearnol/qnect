type QueryString = string | string[] | undefined

export const Index = '/'
export const Dashboard = '/dashboard'

export const CreatePost = {
    Page: '/create',
    Api: '/api/posts/new',
}

export const Post = { 
    new : {
        page: '/create',
        api: 'api/posts/new',
    },
    create: {
        api: 'api/posts',
    },
    update: {
        page: '/update',
        api: '/posts/[:id]'
    },
    get: {
        all: 'api/posts',
        one: 'api/posts/[:id]'
    },
    edit: {
        api: 'api/posts/[:id]/edit'
    },
    delete: {
        api: 'api/posts/[:id]'
    }
}
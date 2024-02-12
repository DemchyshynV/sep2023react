const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'
const posts = '/posts'

const urls = {
    users: {
        base: users,
        byId: (id) => `${users}/${id}`,
        getPostsByUserId: (id) => `${users}/${id}/posts`
    }
}

export {
    baseURL,
    urls
}
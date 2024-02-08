const baseURL = 'https://jsonplaceholder.typicode.com'

const posts = '/posts'

const urls = {
    posts:{
        base:posts,
        byId:(id)=>`${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}
// catch-all-api-routes
// for nested dynamic paths
// ex: posts/post1/comments/user -  like that


// 3000/api/post/post1/comment/user
export default function handler(req, res) {
    const { slug } = req.query
    res.end(`Post: ${slug.join(', ')}`)
}

// Learn : https://nextjs.org/docs/api-routes/dynamic-api-routes#catch-all-api-routes
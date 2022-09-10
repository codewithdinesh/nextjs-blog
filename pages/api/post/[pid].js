export default function handler(req, res) {
    const { pid } = req.query

    console.log(req)
    res.end(`Post: ${pid}`)
}
//適当に引っ張ってきたAPI
// export default async function handler(req, res) {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/')
//     const users = await response.json()
//     res.status(200).json({ users })
// }

// これが以下になるということ
export default async function handler(req, res) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const posts = await response.json()
    res.status(200).json({ posts })
}
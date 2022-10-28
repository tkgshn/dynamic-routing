
import Link from 'next/link'
import Header from '../components/header'

// posts：getStaticPropsで取得したデータを受け取る
const post = ({posts}: {posts:any}) => {
  return (
    <>
      <Header />
    <div>
      <h1>記事一覧</h1>
      <ul>
        {posts.map(({post}: {post:any}) => (
          <li key={post.id}>
            {/* リンク先を指定 */}
            {/* <Link href={`${encodeURIComponent(post["id"])}`}>
              <a>{post.title}</a>
            </Link> */}
          </li>
        ))}
      </ul>
    </div>
      </>
  )
}

// ビルド時にデータを取得し静的なファイルを事前に生成
export const getStaticProps = async () => {
  // 全記事データを取得
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()  

  // コンポーネントに渡すデータを指定
  return {
    props: {
      posts,
    },
  }
}

export default post


// import Header from '../components/header'
// import Link from 'next/link'
// import {useState,useEffect} from 'react'


// export default function postPage() {
//   const [posts, setUsers] = useState([])
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await fetch('/api/posts')
//       const data = await response.json()
//       setUsers(data.posts)
//     }
//     fetchUsers()
//   },[])

//   return (
//     <>
//         <Header />
//         <h1>一覧</h1>
//         <div>
//         <ul>
//             {posts.map(post => (
//               //user.idだと弾かれる
//             <li key={post["id"]}>
//                     ID: {post["id"]}
//                     <br></br>
//                     タイトル: {post["title"]}
//                     <br></br>                    {/* ここで詳細のpost/{user.id}に飛ばす */}
//                     <br></br>
//                     {/* <Link href="post/${post.id}"> */}
//                     {/* <Link href={`/post/${encodeURIComponent(post["id"])}`}>
//                         <a>この記事の詳細を見る</a>
//                     </Link> */}
//                 </li>
//             ))}
//         </ul>
//         </div>
//         </>
//   )
// }
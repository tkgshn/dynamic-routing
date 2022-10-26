import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../../components/header'
import {useState,useEffect} from 'react'

export default function MemberPage() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users/')
      const data = await response.json()
      setUsers(data.users)
    }
    fetchUsers()
  },[])

  const router = useRouter()
  const id = router.query.id as string

  return (
    <>
        <Header />
        <h1>詳細</h1>
        <div>
        <ul>
          {/* <h1>Post: {id}</h1> */}
          <li>{id}</li>
          ここにユーザーの情報とか表示したいけど、今持ってる唯一の情報（id）から取得する方法がわからない
          {/* <li>{users}</li> */}
        </ul>
        </div>
        </>
  )
}




// export default function PostPage({post}) {
//   const router = useRouter()


//   return (
//     <>
//         <Header />
//                 <title>
//                   {post.title}
//                 </title>
//           </>
        
//   )
// }

// export const getStaticProps: GetStaticProps = async ({
//   params,
// }) => {
//   const data = await postindexPage(params?.slug)

//   return {
//     props: {
//       post: data.post,
//     },
//   }
// }
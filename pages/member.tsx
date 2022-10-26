import Header from '../components/header'
import Link from 'next/link'
import {useState,useEffect} from 'react'


export default function memberPage() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data.users)
    }
    fetchUsers()
  },[])

  return (
    <>
        <Header />
        <h1>一覧</h1>
        <div>
        <ul>
            {users.map(user => (
            <li key={user.id}>
                    ID: {user.id}
                    <br></br>
                    名前: {user.name}
                    <br></br>
                    メールアドレス: {user.email}
                    {/* ここで詳細のpost/{user.id}に飛ばす */}
                    <br></br>
                    {/* <Link href="post/${user.id}"> */}
                    <Link href={`/post/${encodeURIComponent(user.id)}`}>
                        <a>この人の詳細を見る</a>
                    </Link>
                </li>
            ))}
        </ul>
        </div>
        </>
  )
}
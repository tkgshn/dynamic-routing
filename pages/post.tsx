
import Link from 'next/link'
import Header from '../components/header'

// posts：getStaticPropsで取得したデータを受け取る
const post = ({ posts }) => {
  return (
    <>
      <Header />
    <div>
      <h1>記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {/* リンク先を指定 */}
            <Link href={`/${post.id}`}>
              <a>{post.title}</a>
            </Link>
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
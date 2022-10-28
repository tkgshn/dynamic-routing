// これはnextが提供してるリンクの方法？
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        
        <li>
          <Link href="/post">
            <a>投稿一覧を見る</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}

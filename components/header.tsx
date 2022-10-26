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
          {/* 割と普通のリンク記法、`First Post`がpost/firstに遷移するよというだけの話 */}
          <Link href="/post/first">
            <a>First Post</a>
          </Link>
        </li>
        <li>
          <Link href="/post/second">
            <a>Second Post</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}

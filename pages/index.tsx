//ファイル名がindexなので、ここが一番最初に表示される
import Header from '../components/header'

export default function IndexPage() {
  return (
    <>
    {/* そして？https://dynamic-routing-beta-ten.vercel.app/を見ればわかるけど、ヘッダーは共通になっている */}
      <Header />
      <h1>Hello World!</h1>
    </>
  )
}
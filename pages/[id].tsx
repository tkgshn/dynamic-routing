import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../components/header";

// post：getStaticPropsから取得したデータ
export default ({ post }: { post: any }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <>
      <Header />
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link href="/">
          <a>Back</a>
        </Link>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  // 外部APIエンドポイントを呼び出しデータ取得
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  // 事前ビルドしたいパスを指定
  const paths = await posts.map(({ post }: { post: any }) => ({
    params: {
      // ファイル名と合わせる ※文字列指定
      id: `${post?.id}`,
    },
  }));
  // paths：事前ビルドするパス対象を指定するパラメータ
  // fallback：事前ビルドしたパス以外にアクセスしたときのパラメータ true:カスタム404Pageを表示 false:404pageを表示
  return { paths, fallback: false };
};

// paramsには上記pathsで指定した値が入る（1postずつ）
export const getStaticProps = async ({ params }: { params: any }) => {
  // 外部APIエンドポイントを呼び出しデータ取得
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const post = await res.json();

  // ページコンポーネントにpropsとしてに渡す
  return {
    props: {
      post,
    },
  };
};

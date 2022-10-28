// export default function IndexPage() {
//   return <h1>POST(投稿)</h1>;
// }

// export async function getServerSideProps({ params }:{params:any}) {
//   console.log(params);
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   return { props: { posts } };
// }

import Link from "next/link";
import Header from "../../components/header";

export default function IndexPage({ post }:{post:any}) {
  return (
    <>
    <Header />
    <div>
      <h1>POST(投稿){post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
    </>
  );
}

export async function getServerSideProps({ params }:{params:any}) {
  // console.log(params); //一旦テストで入れてみる
  // const id = params.post;
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return { props: { post } };
}
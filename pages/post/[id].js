import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';

const Post = ({ post }) => {
  const router = useRouter();

  // Show a loading state while the post is being fetched
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header>{post.title}</Header>
      <div className="max-w-3xl mx-auto p-4 pt-0">
        <p className="text-gray-700 p-2 rounded shadow-md bg-white bg-opacity-80">{post.body}</p>
        <p className="mt-4 text-sm text-gray-500">Post ID: {post.id}</p>
        <p className="text-sm text-gray-500">Author ID: {post.userId}</p>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default Post;
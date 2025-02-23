import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Hashtag from '../components/Hashtag';

export default function Home({ posts, hashtags }) {
  const [activeHashtags, setActiveHashtags] = React.useState([]);
  return (
    <div>
      <Header>"The Afternoon" Posts</Header>
      <div className="container mx-auto p-4 pt-0 max-w-3xl">
        <div className="flex lg:justify-between mb-4 flex-wrap flex-wrap lg:flex-nowrap">{(hashtags||[]).map(h=>(<Hashtag onClick={(e)=>{
          e.target.classList.toggle('active-hashtag');
          if(activeHashtags.includes(h)){
            activeHashtags.splice(activeHashtags.indexOf(h),1);
          } else{
            activeHashtags.push(h);
          }
          setActiveHashtags([...activeHashtags]);
        }}>{h}</Hashtag>))}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.reduce((acc, post) => {
            if(
              activeHashtags.every(
                h=>[...post.title.split(' '),...post.body.split(' ')].includes(h)
              )
            ){
              return acc.concat(
                (
                  <div key={post.id} className="bg-gradient-to-br from-transparent to-orange-100 bg-opacity-30 border p-4 rounded-lg shadow-md flex flex-col hover:scale-110 transition transform ease-in-out duration-300">
                    <h2 className="text-xl font-semibold">
                      <Link href={`/post/${post.id}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 flex-1">{post.body.substring(0, 100)}...</p>
                    <Link href={`/post/${post.id}`} className="text-blue-500 hover:underline">Read More</Link>
                  </div>
                )
              );
            }else return acc;
          },[])}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  const ranking={};
  for(let post of posts){
    const words=[...post.title.split(' '),...post.body.split(' ')].filter(word => word.length > 3);
    words.forEach(word => {
      if(ranking[word]){
        ranking[word]++;
      }else{
        ranking[word] = 1;
      }
    });
  }
  const hashtags = Object.keys(ranking).sort((a,b) => ranking[b] - ranking[a]).slice(0,10);

  return {
    props: {
      posts,
      hashtags
    },
  };
}
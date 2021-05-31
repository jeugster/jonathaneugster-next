import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

// Returns posts
export default function Posts(props) {
 return (
  <>
   {props.posts &&
    props.posts.map((post) => (
     <article className="max-w-prose m-4 pt-6" key={post.id}>
      <h2 className="text-2xl py-2 font-medium">{post.Title}</h2>
      <ReactMarkdown className="pt-2 pb-2">{post.Content}</ReactMarkdown>
      <Link href={`/blog/${post.Slug}`}>
       <a>Go to post page</a>
      </Link>
     </article>
    ))}
  </>
 )
}

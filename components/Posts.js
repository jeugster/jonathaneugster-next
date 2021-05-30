import React from 'react'
import Link from 'next/link'

// Returns posts
export default function Posts(props) {
 return (
  <>
   {props.posts &&
    props.posts.map((post) => (
     <div className="max-w-prose m-4 pt-6 prose" key={post.id}>
      <h2 className="text-center text-xl font-medium prose">{post.Title}</h2>
      <p className="pt-2 pb-2 prose">{post.Content}</p>
      <Link href={`/blog/${post.Slug}`}>
       <a>Go to post page</a>
      </Link>
     </div>
    ))}
  </>
 )
}

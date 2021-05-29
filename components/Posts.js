import React from 'react'

// Returns posts
export default function Posts(props) {
 return (
  <>
   {props.posts &&
    props.posts.map((post) => (
     <div className="max-w-prose m-4 pt-6 " key={post.id}>
      <h2 className="text-center text-xl font-medium">{post.Title}</h2>
      <p className="pt-2 pb-2">{post.Content}</p>

      <p className="text-xs opacity-50">Published: {post.published_at}</p>

      <p className="text-xs opacity-50">Updated: {post.updatedAt}</p>
     </div>
    ))}
  </>
 )
}

import React from 'react'
import styles from '@styles/posts.module.css'

export default function Posts({ posts }) {
 console.log([posts])
 return (
  <div className={styles.posts}>
   {posts &&
    posts.map((post) => (
     <div key={post.id}>
      <h2>Title - {post.Title}</h2>
      <p> Content - {post.Content}</p>
     </div>
    ))}
  </div>
 )
}

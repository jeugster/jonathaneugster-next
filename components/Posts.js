import React from 'react'
import styles from '@styles/posts.module.css'

export default function Posts(props) {
  
 return (
  <div className={styles.posts}>
   {props.posts &&
    props.posts.map((post) => (
     <div className={styles.post} key={post.id}>
      <h2>{post.Title}</h2>
      <p>{post.Content}</p>
     </div>
    ))}
  </div>
 )
}

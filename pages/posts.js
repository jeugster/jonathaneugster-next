import React from 'react'
import axios from 'axios'
//import styled from 'styled-components'

export default function Posts({ posts }) {
 console.log('Posts: ' + { posts })
 return (
   <div className="posts">
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

export async function getStaticProps() {
 const res = await axios.get('http://api.jonathaneugster.com/graphql/posts')
 const posts = await res.data
 return {
  props: { posts },
 }
}

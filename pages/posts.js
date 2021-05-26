import React from 'react'
import Posts from '@components/Posts'
import axios from 'axios'

export default function PostsPage({ posts }) {
 return (
  <div>
   <Posts props={posts} />
  </div>
 )
}

export async function getStaticProps(context) {
 const res = await axios.get('http://api.jonathaneugster.com/posts')

 return {
  props: { posts: res.data },
 }
}

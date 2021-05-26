import React from 'react'
import Posts from '@components/Posts'
import axios from 'axios'

export default function PostsPage(props) {
 //console.log(posts)
 return (
  <div>
   <Posts posts={props.posts} />
  </div>
 )
}

export async function getStaticProps(context) {
 const res = await axios.get('http://api.jonathaneugster.com/posts')
 //console.log(res.data)
 return {
  props: { posts: res.data },
 }
}

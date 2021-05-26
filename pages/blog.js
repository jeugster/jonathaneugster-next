import React from 'react'
import Posts from '@components/Posts'
import axios from 'axios'

export default function Blog(props) {
 //console.log(posts)
 return (
  <>
   <Posts posts={props.posts} />
  </>
 )
}

export async function getStaticProps(context) {
 const res = await axios.get('http://api.jonathaneugster.com/posts')
 //console.log(res.data)
 return {
  props: { posts: res.data },
 }
}

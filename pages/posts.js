import React from 'react'
import axios from 'axios'
//import styled from 'styled-components'

export default function Posts(props) {
 console.log(props.res)
 return <div>{props.res.posts}</div>
}

export async function getStaticProps() {
 try {
  const res = await axios.get('http://api.jonathaneugster.com/posts')
  const posts = res.posts
  console.log(posts)
  return { props: { res } }
 } catch (error) {
  return { error }
 }
}

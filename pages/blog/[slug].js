import React from 'react'
import axios from 'axios'

export default function BlogPage(props) {
 console.log(props)
 return (
  <div className="card p-4">
   <h1>Title</h1>
   <p>Content</p>
  </div>
 )
}

// blog/slug page generation setup
export async function getStaticPaths() {
 const res = await fetch('http://api.jonathaneugster.com/posts/')
 const posts = await res.json()
 const paths = posts.map((post) => ({
  params: { slug: post.Slug },
 }))

 return {
  paths,
  fallback: false,
 }
}

// Get post props for page generation
export async function getStaticProps({ params }) {
 const { slug } = params
 console.log(slug)
 const res = await fetch('http://api.jonathaneugster.com/posts?Slug=${slug}')
 const data = await JSON.parse(JSON.stringify(res))
 return {
  props: data,
 }
}

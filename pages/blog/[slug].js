// import React from 'react'
// import axios from 'axios'

// export default function BlogPage(props) {
//  console.log(props)
//  return (
//   <div className="card p-4">
//    <h1>Title</h1>
//    <p>Content</p>
//   </div>
//  )
// }

// // blog/slug page generation setup
// export async function getStaticPaths() {
//  const res = await fetch('http://api.jonathaneugster.com/posts')
//  const posts = await res.json()
//  const paths = posts.map((post) => ({
//   params: { slug: post.Slug },
//  }))

//  return {
//   paths,
//   fallback: false,
//  }
// }

// // Get post props for page generation
// export async function getStaticProps({ params }) {
//  const { slug } = params
//   console.log({ slug })
//  const res = await fetch('http://api.jonathaneugster.com/posts?Slug=${slug}')
//  const data = await JSON.parse(JSON.stringify(res))
//  return {
//   props: data,
//  }
// }
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

// tell next.js how many pages there are
export async function getStaticPaths() {
 const res = await fetch('http://api.jonathaneugster.com/posts')
 const posts = await res.json()
 const paths = posts.map((post) => ({
  params: { slug: post.Slug },
 }))

 return {
  paths,
  fallback: true,
 }
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }) {
 const { slug } = params

 const res = await fetch(`http://api.jonathaneugster.com/posts?Slug=${slug}`)
 const data = await res.json()
 const post = data[0]

 return {
  props: { post },
 }
}

export default function Post({ post }) {
    const post = {
     Title: '',
     Content: '',
     published_at: '',
     updatedAt: '',
    }
 return (
  <article className="max-w-prose">
   <Link href="/">
    <a>Go Home</a>
   </Link>
   <h2 className="text-2xl py-2">{post.Title}</h2>
   <ReactMarkdown className="">{post.Content}</ReactMarkdown>
   <p className="text-xs opacity-50">Published: {post.published_at}</p>
   <p className="text-xs opacity-50">Updated: {post.updatedAt}</p>
  </article>
 )
}
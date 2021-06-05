import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

// tell next.js how many pages there are
export async function getStaticPaths() {
 const res = await fetch('http://api.jonathaneugster.com/posts')
 const posts = await res.json()
 const paths = await posts.map((post) => ({
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
 const post = await data[0]

 return {
  props: { post } || null,
 }
}

export default function Post({ post = '' }) {
 return (
  <article className="">
   <h2 className="text-2xl py-2">{post.Title}</h2>
   <ReactMarkdown className="">{post.Content}</ReactMarkdown>
   <p className="p-0 text-xs opacity-50">Published: {post.published_at}</p>
   <br></br>
   <p className="p-0 text-xs opacity-50">Updated: {post.updatedAt}</p>
   <br></br>
   <Link href="/">
    <a className="pr-1">/home</a>
   </Link>
   <Link href="/blog">
    <a>/blog</a>
   </Link>
  </article>
 )
}
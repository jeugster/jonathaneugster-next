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
  <div className="bg-gray-500 p-3">
   <article className="">
    <h2 className="text-2xl font-medium">{post.Title}</h2>
    <p className="p-2">
     <ReactMarkdown className="">{post.Content}</ReactMarkdown>
    </p>
   </article>
   <div className="p-2">
    <p className=" text-xs opacity-50">Published: {post.published_at}</p>
    <p className=" text-xs opacity-50">Updated: {post.updatedAt}</p>
    <Link href="/">
     <a className="">/home</a>
    </Link>
    <Link href="/blog">
     <a>/blog</a>
    </Link>
    <Link href={`${post.Slug}`}>
          <a>{`/${post.Slug}`}</a>
    </Link>
   </div>
  </div>
 )
}
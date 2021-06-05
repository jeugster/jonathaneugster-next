import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

// Returns posts
export default function Posts(props) {
 return (
  <>
   {props.posts &&
    props.posts.map((post) => (
     <article className="max-w-prose m-4 p-4" key={post.id}>
      <h2 className="text-2xl py-2 font-medium">{post.Title}</h2>
      <p className="p-2">
       <ReactMarkdown className="">{post.Content}</ReactMarkdown>
      </p>
      <Link href={`/blog/${post.Slug}`}>
       <a>Read More</a>
      </Link>
     </article>
    ))}
  </>
 )
}

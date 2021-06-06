import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

// Returns posts
export default function Posts(props) {
 return (
  <>
   {props.posts &&
    props.posts.map((post) => (
     <div className="bg-gray-500 p-3">
      <article className="max-w-prose" key={post.id}>
       <h2 className="text-2xl font-medium">{post.Title}</h2>
       <p className="p-2">
        <ReactMarkdown className="">{post.Content}</ReactMarkdown>
       </p>
      </article>
      <div className="p-2">
       <Link href={`/blog/${post.Slug}`}>
        <a>Read More</a>
       </Link>
      </div>
     </div>
    ))}
  </>
 )
}

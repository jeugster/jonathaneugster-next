import axios from 'axios'
import Posts from '@components/Posts'

export default function Blog(props) {
 return (
  <>
   <Posts posts={props.posts} />
  </>
 )
}

export async function getStaticProps() {
 const res = await axios.get('http://api.jonathaneugster.com/posts')
 return {
  props: { posts: res.data },
 }
}

import axios from 'axios'
import PostList from '@components/PostList'

export default function Posts(props) {
 return (
  <>
   <PostList posts={props.posts} />
  </>
 )
}

export async function getStaticProps() {
 const res = await axios.get('http://api.jonathaneugster.com/posts')
 return {
  props: { posts: res.data },
 }
}

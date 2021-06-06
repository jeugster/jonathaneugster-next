import Link from 'next/link'

// Main navigation component
export default function Nav() {
 return (
  <div className="header m-4 mb-6">
   <Link href="/">
    <h1 className="text-3xl font-bold">Jonathan Eugster / Web.Dev</h1>
   </Link>
   <ul className="text-underline ">
    <li>
     <Link href="https://github.com/jeugster/">
      <a>github</a>
     </Link>
    </li>
    {/*<a className="profile-link youtube" href="https://www.youtube.com/c/Redravendrone">youtube</a>*/}
    {/* <li>
      <Link href="https://twitter.com/JonathanEugster">twitter</Link>
     </li> */}
    <li>
     <Link href="/contact">
      <a>contact</a>
     </Link>
    </li>
    <li>
     <Link href="/posts">
      <a>posts</a>
     </Link>
    </li>
   </ul>
  </div>
 )
}

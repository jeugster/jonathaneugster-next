import Link from 'next/link'

// Main footer component
export default function Footer() {
 return (
  <div className="footer">
   <ul className="flex flex-row">
    <li className="pr-1">Copyright 2021</li>
    <li className="pr-1">
     <Link href="https://github.com/jeugster/next-portfolio">
      <a>Repo</a>
     </Link>
    </li>
    <li className="pr-1">
     <Link href="/contact">
      <a>Contact</a>
     </Link>
    </li>
    <li className="pr-1">
     <Link href="http://api.jonathaneugster.com/admin/">
      <a>Login</a>
     </Link>
    </li>
   </ul>
  </div>
 )
}

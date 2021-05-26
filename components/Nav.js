import React from 'react'
import Link from 'next/link'
import styles from '@styles/nav.module.css'

export default function Nav() {
 return (
   <div className={styles.header}>
    <Link href="/">
     <h1>Jonathan Eugster / Web.Dev</h1>
    </Link>
    <ul>
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
      <Link href="/blog">
       <a>blog</a>
      </Link>
     </li>
    </ul>
   </div>
 )
}

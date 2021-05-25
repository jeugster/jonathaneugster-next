import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

export default function Nav() {
 const Header = styled.header`
  display: flex;
  place-content: center;
  margin-top: 1rem;
  a {
   font-size: calc(1rem + 0.25vw);
  }
  li {
   display: inline;
   opacity: 90%;
  }
  color: white;
  h1 {
   margin: 0;
   font-weight: bold;
  }
  h1::first-letter {
   font-size: 110%;
   font-style: oblique;
  }
  margin: 1rem;
  h1 {
   text-shadow: 0 0 2px #000000;
   opacity: 90%;
  }
 `

 return (
  <Header>
   <div>
    <Link href="/">
     <h1 id="headerh1">Jonathan Eugster / Web.Dev</h1>
    </Link>
    <ul>
     <li>
      <Link href="https://github.com/jeugster/">github</Link>
     </li>
     {/*<a className="profile-link youtube" href="https://www.youtube.com/c/Redravendrone">youtube</a>*/}
     {/* <li>
      <Link href="https://twitter.com/JonathanEugster">twitter</Link>
     </li> */}
     <li>
      <Link href="/contact">contact</Link>
     </li>
    </ul>
   </div>
  </Header>
 )
}

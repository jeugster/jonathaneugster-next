import Link from 'next/link'
import styled from 'styled-components'

export default function Footer() {
 const Footer = styled.ul`
  position: fixed;
  display: flex;
  place-content: center;
  bottom: 0;
  left: 0;
  padding: 0.25rem 0.25rem;
  margin: 0;
  background: blue;
  background-blend-mode: exclusion;
  opacity: 0.5;
  z-index: 0;
  font-size: 0.85rem;
  width: auto;
  color: white;
  a {
   text-decoration: underline;
   margin: 0.25rem;
  }
  li {
  }
 `
 return (
  <Footer>
   <li>Copyright 2021</li>
   <li>
    <Link href="https://github.com/jeugster/next-portfolio">Repo</Link>
   </li>
   <li>
    <Link href="/contact">Contact</Link>
   </li>
  </Footer>
 )
}

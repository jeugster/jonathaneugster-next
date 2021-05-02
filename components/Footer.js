import Link from 'next/link'
import styled from 'styled-components'

export default function Footer() {

  const Footer = styled.ul`
  position: fixed;
  display: flex;
  place-content: center;
  bottom: 0;
  left: 0;
  padding: .25rem .25rem;
  margin: 0;
  background: blue;
  background-blend-mode: exclusion;
  opacity: 0.5;
  z-index: 0;
  font-size: calc(.75rem + 0.5vw);
  width:auto;
  color: white;
  a {text-decoration: underline; 
    margin: .25rem }
  li {}
`
  return (
      <Footer>
          <li>Copyright 2021</li>
          <li><Link href="/contact">Contact</Link></li>
      </Footer>
  )
}
import styled from 'styled-components'

export default function Footer() {

  const Footer = styled.div`
  position: fixed;
  display: flex;
  place-content: center;
  text-align: right;
  bottom: 0;
  left: 0;
  padding: 0 0.25rem 0 0.25rem;
  background: blue;
  background-blend-mode: exclusion;
  opacity: 0.2;
  z-index: 0;
  font-size: calc(.75rem + 0.5vw);
`
  return (
      <Footer>
         Copyright 2021 /_<a href="/contact">Contact</a>
      </Footer>
  )
}
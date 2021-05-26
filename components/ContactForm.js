import React from 'react'
import styled from 'styled-components'
import styles from '@styles/contactform.module.css'

const ContactFormDiv = styled.div`
 margin: 2rem;
 max-width: 600px;
 height: auto;
 display: flex;
 align-items: center;
 justify-content: left;
 background: rgba(255, 255, 255, 0.25);
 box-shadow: 0 8px 8px 0 rgba(31, 38, 135, 0.37);
 backdrop-filter: blur(1px);
 border-radius: 10px;
 border: 1.5px solid rgba(255, 255, 255, 0.18);
 form {
  display: flex;
  margin: 1rem;
  width: auto;
  align-items: left;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
 }
 .input {
  width: 100%;
 }
 button {
  color: white;
 }
`

export default function ContactForm() {
 return (
  <ContactFormDiv>
   <form
    name="contact"
    action="/success"
    method="POST"
    data-netlify="true"
    className=""
   >
    <input type="hidden" name="contact" value="contact" />
    <p>
     <label htmlFor="yourname">Name:</label> <br />
     <input type="text" name="name" id="name" className="input" />
    </p>
    <p>
     <label htmlFor="youremail">Email:</label> <br />
     <input type="email" name="email" id="youremail" className="input" />
    </p>
    <p>
     <label htmlFor="yourmessage">Message:</label> <br />
     <textarea name="message" id="yourmessage" className="input"></textarea>
    </p>
    <p>
     <button type="submit" className="btn border colors.white">
      Send
     </button>
    </p>
   </form>
  </ContactFormDiv>
 )
}

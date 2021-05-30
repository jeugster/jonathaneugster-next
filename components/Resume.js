import React from 'react'
import Link from 'next/link'

export default function Resume() {
 return (
  <div className="CV">
   <div className="card">
    <ul>
     <li>
      <h2>CODE</h2>
     </li>
     <li>HTML</li>
     <li>CSS</li>
     <li>JavaScript</li>
     <li>React</li>
    </ul>
   </div>
   <div className="card">
    <ul>
     <li>
      <h2>TOOLS</h2>
     </li>
     <li>Git</li>
     <li>VSCode</li>
     <li>Linux</li>
     <li>CLI</li>
     {/* <li>
                    <i className="fab fa-docker"></i> Docker
                </li>
                <li>
                    <i className="fas fa-dharmachakra"></i> K8s
                </li> */}
    </ul>
   </div>
   <div className="card">
    <ul>
     <li>
      <h2>SKILLS</h2>
     </li>
     <li>CI/CD</li>
     <li>Cloud</li>
     <li>API</li>
     <li>Design</li>
    </ul>
   </div>
   <div className="card">
    <ul>
     <li>
      <h2>CERTS</h2>
     </li>
     <li>
      <Link href="https://www.freecodecamp.org/certification/fcc78f3a6da-2bd8-4da7-b6cc-31e4110324b2/responsive-web-design">
       <a>Responsive Web Design</a>
      </Link>
     </li>
     <li>
      <Link href="https://www.freecodecamp.org/certification/fcc78f3a6da-2bd8-4da7-b6cc-31e4110324b2/javascript-algorithms-and-data-structures">
       <a>JS Data Structures & Algorithms</a>
      </Link>
     </li>
    </ul>
   </div>
   <div className="card">
    <ul>
     <li>
      <h2>CONTACT</h2>
     </li>
     <li>
      <a href="mailto:jonathan.eugster@gmail.com">jonathan.eugster@gmail.com</a>
     </li>
     <li>
      <Link href="/contact">contact form</Link>
     </li>
    </ul>
   </div>
  </div>
 )
}

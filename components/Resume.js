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
     <li>
      <i className="fab fa-html5"></i> HTML
     </li>
     <li>
      <i className="fab fa-css3"></i> CSS
     </li>
     <li>
      <i className="fab fa-js"></i> JavaScript
     </li>
     <li>
      <i className=""></i>React
     </li>
    </ul>
   </div>
   <div className="card">
    <ul>
     <li>
      <h2>TOOLS</h2>
     </li>
     <li>
      <i className="fab fa-git"></i>Git
     </li>
     <li>
      <i className="fab fa-windows"></i>VSCode
     </li>
     <li>
      <i className=""></i>Linux
     </li>
     <li>
      <i className=""></i>CLI
     </li>
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
     <li>
      <i className="fas fa-project-diagram"></i>CI/CD
     </li>
     <li>
      <i className="fas fa-server"></i>Cloud
     </li>
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
       Responsive Web Design
      </Link>
     </li>
     <li>
      <Link href="https://www.freecodecamp.org/certification/fcc78f3a6da-2bd8-4da7-b6cc-31e4110324b2/javascript-algorithms-and-data-structures">
       JS Data Structures & Algorithms
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

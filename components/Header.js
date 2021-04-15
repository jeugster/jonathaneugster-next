export default function Header({ title }) {
  return <div>
  <div className="overlay"></div>
  <header>
    <div>
      <h1 id="headerh1">Jonathan Eugster</h1>
      <a className="profile-link" href="https://github.com/jeugster/">
        github
      </a>
      {/*<a
        className="profile-link youtube"
        href="https://www.youtube.com/c/Redravendrone"
      >
        youtube
      </a>*/}
      <a
        className="profile-link"
        href="https://twitter.com/JonathanEugster"
      >
        twitter
      </a>
    </div>
  </header>
  <main>
    <section className="CV">
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
        </ul>
      </div>
      <div className="card">
        <ul>
          <li>
            <h2>TOOLS</h2>
          </li>
          <li>
            <i className="fab fa-git"></i> Git/Hub
          </li>
          <li>
            <i className="fab fa-windows"></i> VSCode
          </li>
          <li>
            <i className="fab fa-docker"></i> Docker
          </li>
          <li>
            <i className="fas fa-dharmachakra"></i> K8s
          </li>
        </ul>
      </div>
      <div className="card">
        <ul>
          <li>
            <h2>SKILLS</h2>
          </li>
          <li>
            <i className="fas fa-project-diagram"></i> DNS
          </li>
          <li>
            <i className="fas fa-server"></i> Cloud
          </li>
          <li></li>
        </ul>
      </div>
      <div className="card">
        <ul>
          <li>
            <h2>CERTS</h2>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/certification/fcc78f3a6da-2bd8-4da7-b6cc-31e4110324b2/responsive-web-design">
              Responsive Web Design
            </a>
          </li>
        </ul>
      </div>
      <div className="card">
        <ul>
          <li>
            <h2>Contact</h2>
          </li>
          <li>
            <a href="mailto:jonathan.eugster@gmail.com">
              jonathan.eugster@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
  <footer>
    <div className="copyright">
      Copyright 2021 <span id="datetime"></span>
    </div>
  </footer>
</div>
}

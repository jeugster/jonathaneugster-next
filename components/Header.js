import React from 'react'

export default function Header() {
  return (
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
  )
}

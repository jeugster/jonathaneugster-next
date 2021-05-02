import styled from 'styled-components'

export default function Nav() {

  const Header = styled.header`
    display: flex;
    place-content: center;
    margin: 1rem;
    a.profile-link{
      font-size: calc(1rem + 0.25vw)
    }
  `

  return (
  <Header>
    <div className="overlay"></div>
    <div>
      <a href="/"><h1 id="headerh1">Jonathan Eugster</h1></a>
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
  </Header>
  )
}

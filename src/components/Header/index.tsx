import { HeaderContainer, Navigation } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Sobre">Nossa escola</a>
        </li>
        <li>
          <a href="#Contato">Contato</a>
        </li>
      </Navigation>
    </HeaderContainer>
  )
}

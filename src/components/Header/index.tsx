import * as S from './styles'
import lua from '../../assets/lua.svg'

const Header = () => (
  <S.HeaderBar>
    <S.Header className="container">
      <h1>
        <span>&lt;</span> Juliano Dev<span> / &gt;</span>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Habilidades</a>
          </li>
          <li>
            <a href="">Projetos</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
      <S.ButtonThema title="Trocar tema" type="button">
        <img src={lua} alt="Trocar tema" />
      </S.ButtonThema>
    </S.Header>
  </S.HeaderBar>
)

export default Header

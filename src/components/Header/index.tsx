import * as S from './styles'
import lua from '../../assets/lua.svg'

const Header = () => (
  <S.HeaderBar>
    <div className="container">
      <S.Header>
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
      <S.NavRow>
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
      </S.NavRow>
    </div>
  </S.HeaderBar>
)

export default Header

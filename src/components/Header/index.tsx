import * as S from './styles'
import lua from '../../assets/lua.svg'
import sol from '../../assets/sol.svg'
import { useState } from 'react'

type Props = {
  toggleTheme: () => void
}

const Header = ({ toggleTheme }: Props) => {
  const [themeType, setThemeType] = useState('lua')

  function toggleThemeType() {
    if (themeType === 'lua') {
      setThemeType('sol')
    } else {
      setThemeType('lua')
    }
  }

  return (
    <S.HeaderBar>
      <div className="container">
        <S.Header>
          <h1>
            <span>&lt;</span> Juliano Dev<span> / &gt;</span>
          </h1>
          <nav>
            <ul>
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#specialties">Habilidades</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
          <S.ButtonThema
            title="Trocar tema"
            type="button"
            onClick={() => {
              toggleTheme()
              toggleThemeType()
            }}
          >
            {themeType === 'lua' ? (
              <img src={lua} alt="Trocar tema" />
            ) : (
              <img src={sol} alt="Trocar tema" />
            )}
          </S.ButtonThema>
        </S.Header>
        <S.NavRow>
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#specialties">Habilidades</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </S.NavRow>
      </div>
    </S.HeaderBar>
  )
}
export default Header

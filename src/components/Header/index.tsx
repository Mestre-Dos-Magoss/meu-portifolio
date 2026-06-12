import { useContext, useState } from 'react'

import * as S from './styles'
import lua from '../../assets/lua.svg'
import sol from '../../assets/sol.svg'

import { LanguageContext } from '../../contexts/LanguageContext'

type Props = {
  toggleTheme: () => void
}

const Header = ({ toggleTheme }: Props) => {
  const [themeType, setThemeType] = useState('lua')
  const { t } = useContext(LanguageContext)

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
                <a href="#home">{t.Header.opcoes.home}</a>
              </li>
              <li>
                <a href="#about">{t.Header.opcoes.about}</a>
              </li>
              <li>
                <a href="#specialties">{t.Header.opcoes.skills}</a>
              </li>
              <li>
                <a href="#projects">{t.Header.opcoes.projects}</a>
              </li>
              <li>
                <a href="#contact">{t.Header.opcoes.contact}</a>
              </li>
            </ul>
          </nav>
          <S.ButtonThema
            title={t.Header.buttonTitle}
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
              <a href="#home">{t.Header.opcoes.home}</a>
            </li>
            <li>
              <a href="#about">{t.Header.opcoes.about}</a>
            </li>
            <li>
              <a href="#specialties">{t.Header.opcoes.skills}</a>
            </li>
            <li>
              <a href="#projects">{t.Header.opcoes.projects}</a>
            </li>
            <li>
              <a href="#contact">{t.Header.opcoes.contact}</a>
            </li>
          </ul>
        </S.NavRow>
      </div>
    </S.HeaderBar>
  )
}
export default Header

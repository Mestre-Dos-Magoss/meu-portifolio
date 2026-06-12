import { useContext, useState } from 'react'
import {
  LanguageContext,
  type LanguageContextType
} from '../../contexts/LanguageContext'

import * as S from './styles'
import World from '../../assets/world.svg'
import close from '../../assets/close.svg'

const Translate = () => {
  const [translateOpen, setTranslateOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('pt')
  const { t } = useContext(LanguageContext)

  const { setLanguage } = useContext(LanguageContext)

  function trocarIdioma(value: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedLanguage(value.target.value)
    toogleTranslate()

    setLanguage(value.target.value as LanguageContextType)
  }

  function toogleTranslate() {
    setTranslateOpen(!translateOpen)
  }

  return (
    <S.ContainerTranslate>
      {/* /** * Seleciona o idioma da tradução * O valor selecionado é armazenado no
      estado selectedLanguage * A função trocarIdioma é chamada quando o usuário
      seleciona um idioma diferente * Ela atualiza o estado selectedLanguage com
      o novo valor selecionado */}
      <S.Select
        className={translateOpen ? 'isOpen' : 'isClose'}
        onChange={trocarIdioma}
        size={2}
      >
        <option value={'pt'}>{t.selectLanguage.pt}</option>
        <option value={'en'}>{t.selectLanguage.en}</option>
      </S.Select>
      <S.TranslateStyle onClick={toogleTranslate}>
        {translateOpen ? (
          <img src={close} alt="Ícone de fechar" />
        ) : (
          <>
            <img src={World} alt="Ícone de tradução" />
            <span>{selectedLanguage}</span>
          </>
        )}
      </S.TranslateStyle>
    </S.ContainerTranslate>
  )
}

export default Translate

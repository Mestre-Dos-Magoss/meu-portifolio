import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import About from './components/About'
import Communication from './components/Communication'
import Footer from './components/Footer'
import Header from './components/Header'
import Porfolio from './components/Portfolio'
import Presentation from './components/Presentation'
import Specialties from './components/Specialties'
import Stacks from './components/Stacks'

import { GlobalStyle } from './styles/styles'
import light from './styles/Themes/light'
import dark from './styles/Themes/dark'

import { ModalProvider } from './contexts/ModalContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Translate from './components/Translate'

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true)

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme)
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isLightTheme ? light : dark}>
        <LanguageProvider>
          <Translate />
          <Header toggleTheme={toggleTheme} />
          <Presentation />
          <About />
          <Specialties />
          <Stacks />
          <ModalProvider>
            <Porfolio />
          </ModalProvider>
          <Communication />
          <Footer />
        </LanguageProvider>
      </ThemeProvider>
    </>
  )
}

export default App

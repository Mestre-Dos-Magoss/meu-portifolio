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

import { ModalProvider } from './utils/context/modal'

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true)

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme)
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={isLightTheme ? light : dark}>
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
      </ThemeProvider>
    </>
  )
}

export default App

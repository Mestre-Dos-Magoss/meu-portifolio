import { useState } from 'react'
import About from './components/About'
import Communication from './components/Communication'
import Footer from './components/Footer'
import Header from './components/Header'
import Porfolio from './components/Portfolio'
import Presentation from './components/Presentation'
import Specialties from './components/Specialties'
import Stacks from './components/Stacks'
import { GlobalStyle } from './styles/styles'
import { ThemeProvider } from 'styled-components'
import light from './styles/Themes/light'
import dark from './styles/Themes/dark'

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
        <Porfolio />
        <Communication />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App

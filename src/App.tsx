import About from './components/About'
import Communication from './components/Communication'
import Footer from './components/Footer'
import Header from './components/Header'
import Porfolio from './components/Portfolio'
import Presentation from './components/Presentation'
import Specialties from './components/Specialties'
import Stacks from './components/Stacks'
import { GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Presentation />
      <About />
      <Specialties />
      <Stacks />
      <Porfolio />
      <Communication />
      <Footer />
    </>
  )
}

export default App

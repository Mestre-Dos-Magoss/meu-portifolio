import SectionAbout from '../SectionAbout'
import { InitialPresentation } from '../../styles/styles'
import Button from '../Buttons'
import Span from '../Span'

import padlock from '../../assets/cadeado.svg'
import email from '../../assets/email.svg'
import presentation from '../../assets/presentation.jpg'

import { redirectUserToPage } from '../../utils'

const About = () => (
  <SectionAbout
    color="principal"
    className="paddingTopBottom container"
    id="about"
  >
    <InitialPresentation>
      <img src={presentation} alt="Juliano Dev trabalhando" />
    </InitialPresentation>
    <InitialPresentation>
      <Span>Sobre mim</Span>
      <h3 className="h2">Juliano Dev</h3>
      <p>
        Olá, eu sou Juliano, desenvolvedor de 21 anos apaixonado por tecnologia
        e pelo poder da programação em transformar ideias em soluções reais. Meu
        objetivo é criar experiências digitais modernas, funcionais e
        visualmente marcantes, sempre alinhadas às melhores práticas de
        desenvolvimento e à escrita de código limpo, eficiente e escalável.
      </p>
      <p>
        Neste portfólio, apresento um pouco da minha trajetória, projetos e
        habilidades, refletindo meu compromisso com qualidade, inovação e
        evolução constante. Mais do que desenvolver sites, páginas e aplicações,
        busco construir soluções que gerem valor, desempenho e resultados.
      </p>
      <div>
        <Button
          color="secundario"
          type="button"
          title="Clique aqui para entrar em contato comigo"
          action={() => redirectUserToPage('#contact')}
        >
          <img src={email} alt="Ícone de email" />
          Entrar em Contato
        </Button>
        <Button
          color="principal"
          type="button"
          title="Clique aqui para ver os meus projetos no GitHub"
          action={() => redirectUserToPage('#projects')}
        >
          <img src={padlock} alt="" />
          Ver Projetos
        </Button>
      </div>
    </InitialPresentation>
  </SectionAbout>
)

export default About

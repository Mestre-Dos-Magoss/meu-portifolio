import Span from '../Span'
import Button from '../Buttons'
import SectionAbout from '../SectionAbout'
import { InitialPresentation } from '../../styles/styles'

import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import LinkNetWorks from '../LinkNetWorks'
import programimg from '../../assets/programim.jpg'

import { redirectUserToPage } from '../../utils'

const Presentation = () => {
  return (
    <SectionAbout color="secundario" className="container" id="home">
      <InitialPresentation>
        <Span>Desenvolvedor Full Stack</Span>
        <h2>
          Transformando <span>Ideias em Código</span>
        </h2>
        <p>
          Desenvolvedor apaixonado por criar experiências digitais excepcionais
          através de código limpo e arquiteturas escaláveis.
        </p>
        <div>
          <Button
            color="secundario"
            padding="16px 32px"
            title="Clique aqui para ver os meus projetos no GitHub"
            type="button"
            action={() => redirectUserToPage('#projects')}
          >
            Ver Projetos
          </Button>
          <Button
            color="principal"
            padding="16px 32px"
            title="Clique aqui para entrar em contato comigo"
            type="button"
            action={() => redirectUserToPage('#contact')}
          >
            Entrar em Contato
          </Button>
        </div>
        <div>
          <LinkNetWorks
            color="principal"
            name="Github"
            description="Clique aqui para acessar o meu repositório no GitHub"
            image={github}
            link="https://github.com/Mestre-Dos-Magoss"
          />
          <LinkNetWorks
            color="principal"
            name="LinkedIn"
            description="Clique aqui para acessar o meu perfil no LinkedIn"
            image={linkedin}
            link="https://linkedin.com/in/juliano-apolinário-devfullstack"
          />
        </div>
      </InitialPresentation>
      <InitialPresentation>
        <img src={programimg} alt="Juliano Dev trabalhando" />
      </InitialPresentation>
    </SectionAbout>
  )
}

export default Presentation

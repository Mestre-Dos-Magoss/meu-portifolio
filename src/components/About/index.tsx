import SectionAbout from '../SectionAbout'
import { InitialPresentation } from '../../styles'
import Button from '../Buttons'
import Span from '../Span'

import padlock from '../../assets/cadeado.svg'
import email from '../../assets/email.svg'

const About = () => (
  <SectionAbout color="principal" className="paddingTopBottom container">
    <InitialPresentation>
      <img
        src="https://img.freepik.com/fotos-gratis/programador-de-smiley-de-tiro-medio-dentro-de-casa_23-2149101154.jpg?semt=ais_hybrid&w=740&q=80"
        alt=""
      />
    </InitialPresentation>
    <InitialPresentation>
      <Span>Sobre mim</Span>
      <h3 className="h2">Juliano F Apolinário</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernaturis,
        possimus consectetur facilis nostrum incidunt fugiat error!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus dolorum
        minima dolor ipsum rerum. Quo deserunt suscipit sit excepturi ullam
        quisquam, reiciendis et dolor, vel voluptate natus quibusdam beatae
        voluptas?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus dolorum
        minima dolor ipsum rerum. Quo deserunt suscipit sit excepturi ullam
        quisquam, reiciendis et dolor, vel voluptate natus quibusdam beatae
        voluptas?
      </p>
      <div>
        <Button
          color="secundario"
          type="button"
          title="Clique aqui para entrar em contato comigo"
        >
          <img src={email} alt="" />
          Entrar em Contato
        </Button>
        <Button
          color="principal"
          type="button"
          title="Clique aqui para ver os meus projetos no GitHub"
        >
          <img src={padlock} alt="" />
          Ver Projetos
        </Button>
      </div>
    </InitialPresentation>
  </SectionAbout>
)

export default About

import Button from '../Buttons'
import * as S from './styles'

import github from '../../assets/github.svg'
import redirect from '../../assets/redirect.svg'

type Props = {
  title: string
  description: string
  image: string
  features: string[]
  technology: string[]
  linkRepos: string
  linkView: string
}

const CardProjects = ({
  title,
  description,
  image,
  features,
  technology,
  linkRepos,
  linkView
}: Props) => (
  <S.CardProjectContainer>
    <img src={image} alt={`Imagem do projeto${title}`} />
    <S.descriptionProject>
      <h4>{title}</h4>
      <p>{description}</p>
      <b>Features:</b>
      <S.ListFeatures>
        {features.map((newFeature) => (
          <div>
            <span></span>
            <li key={newFeature}>{newFeature}</li>
          </div>
        ))}
      </S.ListFeatures>
      <b>Tecnologias:</b>
      <S.ListTechnologysCard>
        {technology.map((techs) => (
          <li>{techs}</li>
        ))}
      </S.ListTechnologysCard>
      <div>
        <Button
          type="link"
          color="principal"
          title="Clique aqui para acessar o projeto no GitHub"
          link={linkRepos}
        >
          <img src={github} alt="" />
          GitHub
        </Button>
        <Button
          type="link"
          color="secundario"
          title="Clique aqui para visualizar o projeto"
          link={linkView}
        >
          <img src={redirect} alt="" /> Demo
        </Button>
      </div>
    </S.descriptionProject>
  </S.CardProjectContainer>
)

export default CardProjects

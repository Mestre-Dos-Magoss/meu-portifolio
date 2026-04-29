import Button from '../Buttons'
import * as S from './styles'

import github from '../../assets/github.svg'
import redirect from '../../assets/redirect.svg'
import Tag from '../Tag'

export type CardProjectProps = {
  title: string
  description: string
  image: string
  features: string[]
  technologys: string[]
  linkRepos: string
  linkView: string
  status: 'Concluído' | 'Em andamento' | 'Planejando'
}

const CardProjects = ({
  title,
  description,
  image,
  features,
  technologys,
  linkRepos,
  linkView,
  status
}: CardProjectProps) => (
  <S.CardProjectContainer title={`Project: ${title}`}>
    <S.TagContainer>
      <Tag status={status} />
    </S.TagContainer>
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
        {technologys.map((techs) => (
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

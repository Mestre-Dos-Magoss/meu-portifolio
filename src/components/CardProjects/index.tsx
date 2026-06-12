import { useContext } from 'react'

import { ButtonContainer, ListTechnologysCard } from '../../styles/styles'
import Button from '../Buttons'
import Tag from '../Tag'
import * as S from './styles'

import github from '../../assets/github.svg'
import redirect from '../../assets/redirect.svg'

import * as enums from '../../utils/enuns/status'
import type { DetailsProject, MainFeatures } from '../../contexts/ModalContext'
import { ModalContext } from '../../contexts/ModalContext'
import Modal from '../Modal/index'
import { LanguageContext } from '../../contexts/LanguageContext'

type statusType = (typeof enums.Status)[keyof typeof enums.Status]

export type CardProjectProps = {
  title: string
  description: string
  image: string
  imagesProject?: string[]
  features: string[]
  technologys: string[]
  linkRepos: string
  linkView: string
  status: statusType
  details: DetailsProject[]
  mainFeatures: MainFeatures[]
}

const CardProjects = ({
  title,
  description,
  image,
  imagesProject,
  features,
  technologys,
  linkRepos,
  linkView,
  status,
  details,
  mainFeatures
}: CardProjectProps) => {
  const { openModal } = useContext(ModalContext)
  const { t } = useContext(LanguageContext)

  function getDescription(description: string): string {
    return description.slice(0, 110) + '...'
  }

  return (
    <>
      <S.CardProjectContainer
        title={`Project: ${title}`}
        onClick={() =>
          openModal({
            title,
            description,
            image,
            status,
            imagesProject,
            details,
            mainFeatures,
            technologys,
            linkRepos,
            linkView
          })
        }
      >
        <S.TagContainer>
          <Tag status={status} />
        </S.TagContainer>
        <img src={image} alt={`Imagem do projeto${title}`} />
        <S.descriptionProject>
          <h4>{title}</h4>
          <p>{getDescription(description)}</p>
          <b>Features:</b>
          <S.ListFeatures>
            {features.map((newFeature) => (
              <div key={newFeature}>
                <span></span>
                <li>{newFeature}</li>
              </div>
            ))}
          </S.ListFeatures>
          <b>{t.TecTitleCardProjects}</b>
          <ListTechnologysCard>
            {technologys.map(
              (techs, position) => position <= 2 && <li key={techs}>{techs}</li>
            )}
          </ListTechnologysCard>
          <ButtonContainer>
            <Button
              type="link"
              color="principal"
              title="Clique aqui para acessar o projeto no GitHub"
              link={linkRepos}
            >
              <img src={github} alt="Imagem do GitHub" />
              GitHub
            </Button>
            <Button
              type="link"
              color="secundario"
              title="Clique aqui para visualizar o projeto"
              link={linkView}
            >
              <img src={redirect} alt="Imagem de redirecionamento" /> Demo
            </Button>
          </ButtonContainer>
        </S.descriptionProject>
      </S.CardProjectContainer>
      <Modal />
    </>
  )
}

export default CardProjects

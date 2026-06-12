import { useContext } from 'react'

import Tag from '../Tag'
import Button from '../Buttons'
import { ButtonContainer, ListTechnologysCard } from '../../styles/styles'
import * as S from './styles'

import close from '../../assets/close.svg'
import redirect from '../../assets/redirect.svg'
import github from '../../assets/github.svg'

import { ModalContext } from '../../contexts/ModalContext'
import { LanguageContext } from '../../contexts/LanguageContext'

const Modal = () => {
  const { isOpenModal, modalData, closeModal } = useContext(ModalContext)
  const { t } = useContext(LanguageContext)

  if (modalData && isOpenModal) {
    return (
      <S.ModalContainer className={isOpenModal ? 'isVisible' : ''}>
        <div
          className={isOpenModal ? 'overlay' : ''}
          onClick={() => closeModal()}
        />
        <S.ModalContent>
          <S.HeaderModal className="headerBar">
            <button type="button" onClick={() => closeModal()}>
              <img src={close} alt="Fechar modal" />
            </button>
          </S.HeaderModal>
          <img
            src={modalData.image}
            alt={`Imagem do projeto ${modalData.title}`}
          />
          <S.ModalContentBody>
            <div>
              <h2>{modalData.title}</h2>
              <Tag status={modalData.status} />
            </div>
            <p>{modalData.description}</p>
            <S.ImagesProject>
              {modalData.imagesProject?.map((img) => (
                <li key={img}>
                  <img src={img} alt={`Imagem do projeto ${modalData.title}`} />
                </li>
              ))}
            </S.ImagesProject>
            <S.ImpactListAndDetails>
              {modalData.details.map((detail) => (
                <li key={detail.title}>
                  <img src={detail.icone} alt={detail.title} />
                  <div>
                    <b>{detail.title}</b>
                    <span>{detail.description}</span>
                  </div>
                </li>
              ))}
            </S.ImpactListAndDetails>
            <h3>{t.modalText.title1}</h3>
            <S.MainFeaturesList>
              {modalData.mainFeatures.map((mainF) => (
                <li key={mainF.title}>
                  <b>{mainF.title}</b>
                  <p>{mainF.description}</p>
                </li>
              ))}
            </S.MainFeaturesList>
            <h3>{t.modalText.title2}</h3>
            <ListTechnologysCard>
              {modalData.technologys.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ListTechnologysCard>
            <ButtonContainer>
              <Button
                title="Clique aqui para acessar o projeto no GitHub"
                type="link"
                color="principal"
                link={modalData.linkRepos}
              >
                <img src={github} alt="Imagem do GitHub" />
                GitHub
              </Button>
              <Button
                title="Clique aqui para visualizar o projeto"
                type="link"
                color="secundario"
                link={modalData.linkView}
              >
                <img src={redirect} alt="Imagem de redirecionamento" />
                {t.modalText.ButtonText}
              </Button>
            </ButtonContainer>
          </S.ModalContentBody>
        </S.ModalContent>
      </S.ModalContainer>
    )
  }
}
export default Modal

import { createContext, useState } from 'react'

import * as enuns from '../../utils/enuns/status'

export type DetailsProject = {
  icone: string
  title: string
  description: string
}

export type MainFeatures = {
  title: string
  description: string
}

export type ModalProps = {
  title: string
  description: string
  image: string
  status: enuns.Status
  imagesProject?: string[]
  details: DetailsProject[]
  mainFeatures: MainFeatures[]
  technologys: string[]
  linkRepos: string
  linkView: string
}
/**
 * @property modalData: armazena os dados do modal, como título, descrição, imagem, etc.
 *  Ele é do tipo ModalProps ou null, indicando que pode não haver dados de modal
 *  disponíveis no momento
 * @property isOpenModal: é um booleano que indica se o modal está aberto ou fechado.
 *  Ele é usado para controlar a visibilidade do modal na interface do usuário
 * @function openModal: é uma função que recebe os dados do modal como parâmetro e
 *  é usada para abrir o modal. Ela define os dados do modal e altera o estado
 *  isOpenModal para true, indicando que o modal está aberto
 * @function closeModal: é uma função que fecha o modal. Ela altera o estado isOpenModal
 *  para false e limpa os dados do modal, definindo modalData como null
 */

interface ModalContextData {
  modalData: ModalProps | null
  isOpenModal: boolean
  openModal: (data: ModalProps) => void
  closeModal: () => void
}
/**
 * @interface ModalProviderProps: define a estrutura dos props que o ModalProvider
 *  pode receber. Ele tem uma propriedade children, que é do tipo React.ReactNode.
 *  Isso significa que o ModalProvider pode envolver qualquer elemento React como filho,
 *  permitindo que o contexto do modal seja acessível a todos os componentes dentro
 *  dessa hierarquia de componentes.
 */
interface ModalProviderProps {
  children: React.ReactNode
}
/**
 * @description: O ModalContext é criado usando a função createContext do React, que define os
 * tipos de dados e funções que estarão disponíveis para os componentes que consumirem esse contexto.
 */

export const ModalContext = createContext<ModalContextData>(
  {} as ModalContextData
)

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [modalData, setModalData] = useState<ModalProps | null>(null)

  const openModal = (data: ModalProps) => {
    setModalData(data)
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
    setModalData(null)
  }

  return (
    <ModalContext.Provider
      value={{ isOpenModal, modalData, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  )
}

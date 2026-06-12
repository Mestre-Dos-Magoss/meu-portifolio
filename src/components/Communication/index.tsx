import { useContext } from 'react'

import Button from '../Buttons'
import SectionAbout from '../SectionAbout'
import Section from '../Sections'
import * as S from './styles'

import send from '../../assets/send.svg'
import linkedin from '../../assets/linkedin.svg'
import email from '../../assets/email.svg'

import { LanguageContext } from '../../contexts/LanguageContext'

const Communication = () => {
  const { t } = useContext(LanguageContext)

  return (
    <Section
      color="secundária"
      subTitle={t.Communication.Span}
      title={t.Communication.title}
      text={t.Communication.text}
      id="contact"
    >
      <SectionAbout color="secundario">
        <S.CommunicationChannel>
          <h3>{t.Communication.CommunicationChannel.title}</h3>
          <p>{t.Communication.CommunicationChannel.description}</p>
          <S.ListNetwork>
            <S.NetWorkChannels
              color="linkedin"
              href="https://linkedin.com/in/juliano-apolinário-devfullstack"
              target="_blank"
            >
              <div>
                <img src={linkedin} alt="Logo do LinkedIn" />
              </div>
              <span>Linkedin</span>
            </S.NetWorkChannels>
            <S.NetWorkChannels
              color="email"
              href="mailto:julianodev91@gmail.com"
              target="_blank"
            >
              <div>
                <img src={email} alt="Logo do Email" />
              </div>
              <span>Email</span>
            </S.NetWorkChannels>
          </S.ListNetwork>
        </S.CommunicationChannel>
        <S.Form>
          {/* //TODO: Implementar funcionalidade de envio de mensagem */}
          <S.InputField>
            <label htmlFor="nameMessenger">{t.Communication.Form.name}</label>
            <input
              type="text"
              id="nameMessenger"
              placeholder={t.Communication.Form.namePlaceholder}
            />
          </S.InputField>
          <S.InputField>
            <label htmlFor="emailMessenger">{t.Communication.Form.email}</label>
            <input
              type="text"
              id="emailMessenger"
              placeholder={t.Communication.Form.emailPlaceholder}
            />
          </S.InputField>
          <S.InputField>
            <label htmlFor="messageMessenger">
              {t.Communication.Form.mensagem}
            </label>
            <textarea
              id="messageMessenger"
              placeholder={t.Communication.Form.mensagemPlaceholder}
            ></textarea>
          </S.InputField>
          <Button
            padding="16px 24px"
            color="secundario"
            title={t.Communication.Form.buttonMensagemDescription}
            type="submit"
          >
            <img src={send} alt="Ícone de enviar mensagem" />
            {t.Communication.Form.buttonMensagem}
          </Button>
        </S.Form>
      </SectionAbout>
    </Section>
  )
}
export default Communication

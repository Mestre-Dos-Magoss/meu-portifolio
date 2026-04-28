import Button from '../Buttons'
import SectionAbout from '../SectionAbout'
import Section from '../Sections'
import * as S from './styles'
import send from '../../assets/send.svg'
import linkedin from '../../assets/linkedin.svg'

const Communication = () => (
  <Section
    color="secundária"
    subTitle="contato"
    title="Vamos Trabalhar Juntos?"
    text="Estou sempre aberto a novos projetos e oportunidades. Entre em contato e vamos conversar sobre como posso ajudar!"
    id="contact"
  >
    <SectionAbout color="secundario">
      <S.CommunicationChannel>
        <h3>Canais de Comunicação</h3>
        <p>
          Escolha a forma mais conveniente para você entrar em contato. Respondo
          geralmente em até 24 horas.
        </p>
        <S.ListNetwork>
          <S.NetWorkChannels
            href="https://linkedin.com/in/juliano-apolinário-devfullstack"
            target="_blank"
          >
            <div>
              <img src={linkedin} alt="" />
            </div>
            <span>Linkedin</span>
          </S.NetWorkChannels>
          <S.NetWorkChannels
            href="https://linkedin.com/in/juliano-apolinário-devfullstack"
            target="_blank"
          >
            <div>
              <img src={linkedin} alt="" />
            </div>
            <span>Linkedin</span>
          </S.NetWorkChannels>
          <S.NetWorkChannels
            href="https://linkedin.com/in/juliano-apolinário-devfullstack"
            target="_blank"
          >
            <div>
              <img src={linkedin} alt="" />
            </div>
            <span>Linkedin</span>
          </S.NetWorkChannels>
        </S.ListNetwork>
      </S.CommunicationChannel>
      <S.Form>
        <S.InputField>
          <label htmlFor="nameMessenger">Nome</label>
          <input
            type="text"
            id="nameMessenger"
            placeholder="Seu nome completo"
          />
        </S.InputField>
        <S.InputField>
          <label htmlFor="emailMessenger">Email</label>
          <input type="text" id="emailMessenger" placeholder="seu@email.com" />
        </S.InputField>
        <S.InputField>
          <label htmlFor="messageMessenger">Menssagem</label>
          <textarea
            id="messageMessenger"
            placeholder="Conte-me sobre o seu projeto ou ideia..."
          ></textarea>
        </S.InputField>
        <Button
          padding="16px 24px"
          color="secundario"
          title="Clique aqui para me enviar uma mensagem"
          type="submit"
        >
          <img src={send} alt="" />
          Enviar Mensagem
        </Button>
      </S.Form>
    </SectionAbout>
  </Section>
)

export default Communication

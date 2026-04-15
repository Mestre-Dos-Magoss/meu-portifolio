import styled from 'styled-components'

type Props = {
  padding?: string
  color: 'principal' | 'secundario'
}

export const Botao = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding || '12px 16px'};
  font-size: 16px;
  border: 2px solid
    ${(props) => (props.color === 'principal' ? '#e2e8f0' : '#6366f1')};
  border-radius: 12px;
  background-color: ${(props) =>
    props.color === 'principal' ? '#fff' : '#6366f1'};
  color: ${(props) => (props.color === 'principal' ? '#000' : '#fff')};

  img {
    margin-right: 8px;
    height: 16px;
    width: 16px;
  }
`

export const BotaoLink = styled.a<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding || '12px 16px'};
  font-size: 16px;
  text-decoration: none;
  border: 2px solid
    ${(props) => (props.color === 'principal' ? '#e2e8f0' : '#6366f1')};
  border-radius: 12px;
  background-color: ${(props) =>
    props.color === 'principal' ? '#fff' : '#6366f1'};
  color: ${(props) => (props.color === 'principal' ? '#000' : '#fff')};

  img {
    margin-right: 8px;
    height: 16px;
    width: 16px;
  }
`

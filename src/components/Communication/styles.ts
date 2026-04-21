import styled from 'styled-components'
import { Botao } from '../Buttons/styles'

export const CommunicationChannel = styled.div`
  display: block;
  text-align: start;

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 32px;
    font-size: 16px;
    color: #64748b;
  }
`

export const ListNetwork = styled.ul`
  display: flex;
  justify-content: flex-start;
  column-gap: 1.6em;
`

export const NetWorkChannels = styled.a`
    padding: 24px;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    background-color: #fff;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        border:1px solid #6366f1;
    }
    
    div {
        display: flex; 
        align-items: center;
        justify-content: center; 
        height: 56px;
        width: 56px;
        margin-bottom: 16px;
        border: none;
        border-radius: 50%;
        background-color: #6255f143;
    }
    
    img {
        width: 28px;
        height: 28px;
    }
    
    span {
        display: block;
        font-weight: 600;
        font-size: 16px;
    }
`

export const Form = styled.form`
  display: block;
  width: 100%;

  ${Botao} {
    width: 100%;
    font-weight: 600;
  }
`

export const InputField = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 24px;

  label {
    display: block;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
    text-align: start;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 16px;
    font-size: 16px;
    outline-color: #6366f1;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    background-color: #fff;
    color: #000;
  }

  textarea {
    resize: none;
    height: 140px;
  }
`

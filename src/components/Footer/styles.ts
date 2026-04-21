import styled from 'styled-components'
import { LinkContacts } from '../LinkNetWorks/styles'

export const FooterFull = styled.div`
  display: block;
  width: 100%;
  padding: 48px 32px;
  padding-bottom: 32px;
  background-color: #fafafa;
  border-top: 1px solid #e2e8f0;
`

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2em;

  h2 {
    color: #7e8eff;
    margin-bottom: 16px;

    span {
      color: #8d96d5;
    }
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    color: #64748b;
  }

  li {
    font-size: 16px;
    margin-bottom: 8px;
    color: #64748b;
  }

  div:last-child {
    ul{
      display: flex;
      column-gap: 8px;
    }
  }

  ${LinkContacts} {
    height: 40px;
    width: 40px;

    img {
      height: 18px;
      width: 18px;
    }
  }
`

export const Gracias = styled.div`
  display: block;
  padding-top: 32px;
  text-align: center;
  border-top: 1px solid #e2e8f0;
  color: #64748b;
`
import styled from 'styled-components'
import { LinkContacts } from '../LinkNetWorks/styles'
import { breakPoints } from '../../styles/styles'
import type { Theme } from '../../styles/Themes/light'

export const FooterFull = styled.div`
  display: block;
  width: 100%;
  padding: 48px 32px;
  padding-bottom: 32px;
  background-color: ${(props) => (props.theme as Theme).section.principal};
  border-top: 1px solid ${(props) => (props.theme as Theme).border};
`

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2em;
  padding-bottom: 32px;

  h2 {
    color: ${(props) => (props.theme as Theme).blueTitle};
    margin-bottom: 16px;

    span {
      color: ${(props) => (props.theme as Theme).bluishPurpleTitle};
    }
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
    color: ${(props) => (props.theme as Theme).title};
  }

  p {
    font-size: 16px;
    color: ${(props) => (props.theme as Theme).text};
  }

  li {
    font-size: 16px;
    margin-bottom: 8px;
    color: ${(props) => (props.theme as Theme).text};
  }

  div:last-child {
    ul {
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

  @media (max-width: ${breakPoints.tablet}) {
    display: block;

    div {
      margin-bottom: 32px;
    }
  }

  @media (max-width: ${breakPoints.celular}) {
    div:last-child ul {
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.75em;
    }

    text-align: center;
  }
`

export const Gracias = styled.div`
  display: block;
  padding-top: 32px;
  text-align: center;
  border-top: 1px solid ${(props) => (props.theme as Theme).border};
  color: ${(props) => (props.theme as Theme).text};
`

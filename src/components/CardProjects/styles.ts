import styled from 'styled-components'
import { BotaoLink } from '../Buttons/styles'
import { breakPoints } from '../../styles/styles'
import type { Theme } from '../../styles/Themes/light'

export const CardProjectContainer = styled.div`
  display: block;
  height: 100%;
  border: 1px solid ${(props) => (props.theme as Theme).border};
  border-radius: 12px;
  background-color: ${(props) => (props.theme as Theme).section.principal};
  text-align: start;
  line-height: 26px;

  > img {
    width: 100%;
    height: 224px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }
`

export const descriptionProject = styled.div`
  padding: 24px;

  h4 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    font-weight: Normal;
    margin-bottom: 16px;
    color: ${(props) => (props.theme as Theme).text};
  }

  div {
    display: flex;
    column-gap: 12px;
    width: 100%;

    ${BotaoLink} {
      width: 100%;
    }
  }

  b {
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    padding: 20px;

    div {
      flex-wrap: wrap;
      gap: 12px;
    }
  }
`

export const ListTechnologysCard = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 8px;

  li {
    display: block;
    border-radius: 16px;
    padding: 0 16px;
    font-size: 12px;
    font-weight: 600;
    background-color: ${(props) => (props.theme as Theme).section.secundaria};
    color: ${(props) => (props.theme as Theme).button.secundaria};
  }
`

export const ListFeatures = styled.ul`
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;

    li {
      color: ${(props) => (props.theme as Theme).text};
      font-size: 14px;
    }

    span {
      background-color: ${(props) => (props.theme as Theme).button.secundaria};
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
  }
`

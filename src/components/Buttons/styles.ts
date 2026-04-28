import styled from 'styled-components'
import type { Theme } from '../../styles/Themes/light'

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
    ${(props) =>
      props.color === 'principal'
        ? (props.theme as Theme).border
        : (props.theme as Theme).button.secundaria};
  border-radius: 12px;
  background-color: ${(props) =>
    props.color === 'principal'
      ? (props.theme as Theme).button.principal
      : (props.theme as Theme).button.secundaria};
  color: ${(props) =>
    props.color === 'principal'
      ? (props.theme as Theme).title
      : (props.theme as Theme).button.principal};
  cursor: pointer;

  img {
    margin-right: 8px;
    height: 16px;
    width: 16px;
    filter: ${(props) =>
      props.color === 'principal'
        ? (props.theme as Theme).svgColors.secundaria
        : (props.theme as Theme).svgColors.principal};
  }
`

export const BotaoLink = styled.a<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding || '12px 16px'};
  font-size: 16px;
  border: 2px solid
    ${(props) =>
      props.color === 'principal'
        ? (props.theme as Theme).border
        : (props.theme as Theme).button.secundaria};
  border-radius: 12px;
  background-color: ${(props) =>
    props.color === 'principal'
      ? (props.theme as Theme).button.principal
      : (props.theme as Theme).button.secundaria};
  color: ${(props) =>
    props.color === 'principal'
      ? (props.theme as Theme).title
      : (props.theme as Theme).button.principal};
  text-decoration: none;

  img {
    margin-right: 8px;
    height: 16px;
    width: 16px;
    filter: ${(props) =>
      props.color === 'principal'
        ? (props.theme as Theme).svgColors.secundaria
        : (props.theme as Theme).svgColors.principal};
  }
`

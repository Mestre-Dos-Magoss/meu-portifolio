import styled from 'styled-components'
import type { Props } from '.'
import { Botao } from '../Buttons/styles'
import { breakPoints } from '../../styles/styles'
import type { Theme } from '../../styles/Themes/light'

export const Presentation = styled.div<Omit<Props, 'className' | 'children'>>`
  display: block;
  background-color: ${(props) =>
    props.color === 'principal'
      ? (props.theme as Theme).button.principal
      : (props.theme as Theme).section.principal};
  padding-top: 4px;
`
export const PresentationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3.4em;
  align-items: center;

  ${Botao} {
    img {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: ${breakPoints.desktop}) {
    gap: 2em;
  }

  @media (max-width: ${breakPoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.4em;
  }

  @media (max-width: ${breakPoints.celular}) {
    gap: 1.5em;
  }
`

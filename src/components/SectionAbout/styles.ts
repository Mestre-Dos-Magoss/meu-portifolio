import styled from 'styled-components'
import type { Props } from '.'
import { Botao } from '../Buttons/styles'

export const Presentation = styled.div<Omit<Props, 'className' | 'children'>>`
  display: block;
  width: 100%;
  background-color: ${(props) =>
    props.color === 'principal' ? '#fff' : '#fafafa'};
`
export const PresentationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.4em;

  ${Botao} {
    img {
      width: 20px;
      height: 20px;
    }
  }
`

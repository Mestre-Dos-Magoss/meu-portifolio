import styled from 'styled-components'
import { breakPoints } from '../../styles/styles'
import { CardProjectContainer } from '../CardProjects/styles'

export const ListProjects = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2em;
  row-gap: 3em;

  @media (max-width: ${breakPoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;

    ${CardProjectContainer} {
      margin-bottom: 2em;
      width: 100%;
    }
  }

  @media (max-width: ${breakPoints.celular}) {
    grid-template-columns: 1fr;
  }
`

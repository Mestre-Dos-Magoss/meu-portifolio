import styled from 'styled-components'
import { breakPoints } from '../../styles'
import { Card } from '../CardSpecialties/styles'

export const Cardsgrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2em;
  row-gap: 2em;

  @media (max-width: ${breakPoints.tablet}){
    grid-template-columns: 1fr;
    width: 100%;

    ${Card} {
      margin-bottom: 2em;
    }
  }

  @media (max-width: ${breakPoints.celular}){
    grid-template-columns: 1fr;
    gap: 1.5em;
  }
`

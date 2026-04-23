import styled from 'styled-components'
import { breakPoints } from '../../styles'

export const StackContainer = styled.div`
  display: block;
  text-align: center;
  background-color: #fff;
`

export const ListaStack = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2em;
  column-gap: 2em;

  @media (max-width: ${breakPoints.tablet}){
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  @media (max-width: ${breakPoints.celular}){
    grid-template-columns: 1fr;
    width: 100%;
  }
`

import styled from 'styled-components'
import type { Theme } from '../../styles/Themes/light'
import { breakPoints } from '../../styles/styles'

export const ContainerTranslate = styled.div`
  position: fixed;
  bottom: 8px;
  right: 8px;
  width: 100px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .isOpen {
    display: block;
  }

  .isClose {
    visibility: hidden;
  }

  @media (max-width: ${breakPoints.celular}) {
    width: 50px;
  }
`

export const TranslateStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 52px;
  height: 52px;
  margin-top: 12px;
  border-radius: 50%;
  background: ${(props) => (props.theme as Theme).button.secundaria};

  span {
    font-size: 10px;
    font-weight: bold;
    color: ${(props) => (props.theme as Theme).button.principal};
  }

  img {
    width: 20px;
    height: 20px;
    filter: ${(props) => (props.theme as Theme).svgColors.principal};
  }
`

export const Select = styled.select`
  height: 100px;
  width: 80px;
  border-radius: 100%;
  border: 1px solid ${(props) => (props.theme as Theme).button.secundaria};
  color: ${(props) => (props.theme as Theme).title};
  background-color: transparent;
  scrollbar-width: none;

  option {
    margin-top: 16px;
    display: flex;
    justify-content: center;
  }
`

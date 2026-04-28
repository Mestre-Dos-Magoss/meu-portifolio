import styled from 'styled-components'
import type { Theme } from '../../styles/Themes/light'

type Props = {
  color: 'principal' | 'secundaria'
}

export const LinkContacts = styled.a<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  padding: 12px;
  border: 1px solid ${(props) => (props.theme as Theme).border};
  border-radius: 50%;
  background-color: ${(props) =>
    props.color === 'principal'
      ? 'transparent'
      : (props.theme as Theme).section.secundaria};
  transition: all ease 0.3s;

  img {
    width: 20px;
    height: 20px;
    filter: ${(props) => (props.theme as Theme).svgColors.secundaria};
  }

  &:hover {
    width: 50px;
    height: 50px;
    background-color: ${(props) => (props.theme as Theme).button.secundaria};
    border-color: ${(props) => (props.theme as Theme).button.secundaria};
    transition: all ease 0.3s;
  }
`

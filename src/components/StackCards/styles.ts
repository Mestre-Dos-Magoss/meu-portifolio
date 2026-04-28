import styled from 'styled-components'
import type { Theme } from '../../styles/Themes/light'

export const CardStack = styled.div`
  padding: 24px;
  border: 1px solid ${(props) => (props.theme as Theme).border};
  border-radius: 12px;
  background-color: ${(props) => (props.theme as Theme).section.principal};
  transition: all ease 0.3s;

  &:hover {
    border-color: ${(props) => (props.theme as Theme).button.secundaria};
    transition: all ease 0.3s;
  }

  h5 {
    font-size: 18px;
    margin-bottom: 8px;
    text-align: center;
    color: ${(props) => (props.theme as Theme).title};
  }

  p {
    text-align: center;
    font-size: 14px;
    color: ${(props) => (props.theme as Theme).text};
  }
`

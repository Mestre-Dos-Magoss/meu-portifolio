import styled from 'styled-components'
import type { Theme } from '../../styles/Themes/light'

export const SpanPersonality = styled.span`
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  margin-bottom: 16px;
  color: ${(props) => (props.theme as Theme).button.secundaria};
`

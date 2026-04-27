import styled from 'styled-components'
import type { Theme } from '../../styles/Themes/light'

type Props = {
  color: 'principal' | 'secundária'
}
export const SectionStyles = styled.div<Props>`
  display: block;
  width: 100%;
  background-color: ${(props) =>
    props.color === 'principal'
      ? (props.theme as Theme).section.secundaria
      : (props.theme as Theme).section.principal};
  text-align: center;

  h2 {
    color: ${(props) => (props.theme as Theme).title};
  }

  .container > p {
    max-width: 672px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 64px;
    font-size: 20px;
    color: ${(props) => (props.theme as Theme).text};
  }
`

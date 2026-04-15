import styled from 'styled-components'

type Props = {
  color: 'principal' | 'secundária'
}
export const SectionStyles = styled.div<Props>`
  display: block;
  width: 100%;
  background-color: ${(props) =>
    props.color === 'principal' ? '#fafafa' : '#fff'};
  text-align: center;

  .container > p {
    max-width: 672px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 64px;
    font-size: 20px;
    color: #64748b;
  }
`

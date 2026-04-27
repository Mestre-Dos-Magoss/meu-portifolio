import styled from 'styled-components'
import { breakPoints } from '../../styles/styles'
import type { Theme } from '../../styles/Themes/light'

type Props = {
  color: string
}

export const Card = styled.div`
  padding: 32px;
  border: 1px solid ${(props) => (props.theme as Theme).border};
  border-radius: 16px;
  background-color: ${(props) => (props.theme as Theme).section.principal};

  h4 {
    font-size: 28px;
    margin-bottom: 12px;
    color: ${(props) => (props.theme as Theme).title};
  }

  p,
  h4 {
    text-align: start;
  }

  p {
    font-size: 20px;
    color: ${(props) => (props.theme as Theme).text};
  }

  @media (max-width: ${breakPoints.tablet}) {
    padding: 24px;

    h4 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
    }
  }
`

export const LogoStack = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background-color: ${(props) => props.color};
  margin-bottom: 24px;

  img {
    width: 28px;
    height: 28px;
  }
`

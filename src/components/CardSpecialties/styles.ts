import styled from 'styled-components'

type Props = {
  color: string
}

export const Card = styled.div`
  padding: 32px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;

  h4 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  p,
  h4 {
    text-align: start;
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

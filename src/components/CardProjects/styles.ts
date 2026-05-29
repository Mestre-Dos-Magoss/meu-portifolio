import styled from 'styled-components'
import { breakPoints } from '../../styles/styles'
import type { Theme } from '../../styles/Themes/light'

export const CardProjectContainer = styled.div`
  position: relative;
  display: block;
  height: 100%;
  border: 1px solid ${(props) => (props.theme as Theme).border};
  border-radius: 12px;
  background-color: ${(props) => (props.theme as Theme).section.principal};
  text-align: start;
  line-height: 26px;
  cursor: pointer;

  > img {
    width: 100%;
    height: 224px;
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }
`

export const TagContainer = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  width: 116px;
  height: 12px;
  z-index: 1;
`

export const descriptionProject = styled.div`
  padding: 24px;

  h4 {
    font-size: 24px;
    margin-bottom: 16px;
    color: ${(props) => (props.theme as Theme).title};
  }

  p {
    font-size: 16px;
    font-weight: Normal;
    margin-bottom: 16px;
    color: ${(props) => (props.theme as Theme).text};
  }

  b {
    display: block;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${(props) => (props.theme as Theme).title};
  }

  @media (max-width: ${breakPoints.tablet}) {
    padding: 20px;
  }
`

export const ListFeatures = styled.ul`
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;

    li {
      font-size: 14px;
      margin-left: 8px;
      color: ${(props) => (props.theme as Theme).text};
    }

    span {
      background-color: ${(props) => (props.theme as Theme).button.secundaria};
      display: block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
  }
`

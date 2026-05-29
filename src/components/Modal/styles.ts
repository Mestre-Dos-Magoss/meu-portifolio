import styled from 'styled-components'
import type { Theme } from '../../styles/Themes/light'
import { breakPoints, ListTechnologysCard } from '../../styles/styles'

export const ModalContainer = styled.div`
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  &.isVisible {
    display: flex;
    overflow-y: scroll;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(4px);
  }
`

export const ModalContent = styled.div`
  position: absolute;
  top: 20px;
  display: block;
  max-width: 896px;
  width: 100%;
  z-index: 2;
  background-color: ${(props) => (props.theme as Theme).section.principal};
  border-radius: 12px;

  > img {
    width: 100%;
    height: 320px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  h2 {
    font-size: 32px;
    color: ${(props) => (props.theme as Theme).title};
  }

  h3 {
    font-size: 20px;
    margin-bottom: 16px;
    text-align: start;
    color: ${(props) => (props.theme as Theme).title};
  }

  @media (max-width: ${breakPoints.tablet}) {
    width: 90%;
    top: 160px;

    > img {
      height: 300px;
    }
  }
`

export const ModalContentBody = styled.div`
  padding: 32px;
  max-height: 380px;
  overflow-y: scroll;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    @media (max-width: ${breakPoints.tablet}) {
      align-items: baseline;
    }

    div {
      span {
        padding: 4px 12px;
      }
    }
  }

  > p {
    font-size: 16px;
    text-align: justify;
    line-height: 32px;
    font-weight: normal;
    margin-bottom: 24px;
    letter-spacing: 1px;
    color: ${(props) => (props.theme as Theme).text};
  }

  ${ListTechnologysCard} {
    li {
      border-radius: 12px;
      padding: 8px 16px;
      font-size: 14px;
    }
  }
`

export const ImagesProject = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 16px;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  margin-bottom: 24px;

  > li {
    display: block;
    height: 192px;
    min-width: 408px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  }
`

export const HeaderModal = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: absolute;

  button {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 32px;
    height: 32px;
    border-radius: 8px;
  }
`

export const ImpactListAndDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 16px;
  font-size: 14px;
  margin-bottom: 16px;

  img {
    width: 20px;
    height: 20px;
    filter: ${(props) => (props.theme as Theme).svgUniqueColors.blue};
  }

  li {
    display: grid;
    grid-template-columns: 20px 1fr;
    column-gap: 12px;
    padding: 16px;
    border-radius: 12px;
    background-color: ${(props) => (props.theme as Theme).section.secundaria};
    color: ${(props) => (props.theme as Theme).text};

    b {
      color: ${(props) => (props.theme as Theme).title};
      display: block;
      margin-bottom: 8px;
    }

    div {
      text-align: start;
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
    display: block;

    li {
      margin-bottom: 12px;
    }
  }
`

export const MainFeaturesList = styled.ul`
  display: block;
  width: 100%;
  text-align: start;

  li {
    display: block;
    padding: 16px;
    letter-spacing: 1px;
    margin-bottom: 16px;
    border-radius: 12px;
    background-color: ${(props) => (props.theme as Theme).section.secundaria};
  }

  b {
    font-size: 16px;
    color: ${(props) => (props.theme as Theme).title};
  }

  p {
    margin-top: 12px;
    font-size: 14px;
    color: ${(props) => (props.theme as Theme).text};
  }
`

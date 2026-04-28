import styled from 'styled-components'
import { breakPoints } from '../../styles/styles'
import type { Theme } from '../../styles/Themes/light'

export const HeaderBar = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  border-bottom: 1px solid ${(props) => (props.theme as Theme).border};
  background-color: ${(props) => (props.theme as Theme).section.principal};
  color: ${(props) => (props.theme as Theme).title};
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  height: 80px;
  padding-bottom: 16px;
  padding-top: 16px;

  ul {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.8em;
    row-gap: 0.75em;
  }

  a {
    text-decoration: none;
    color: ${(props) => (props.theme as Theme).text};
    font-size: 16px;

    &:hover {
      color: ${(props) => (props.theme as Theme).blueTitle};
    }
  }

  h1 {
    font-size: 24px;
    color: ${(props) => (props.theme as Theme).blueTitleHeader};

    span {
      color: ${(props) => (props.theme as Theme).bluishPurpleTitle};
    }
  }

  @media (max-width: ${breakPoints.tablet}) {
    height: auto;

    nav {
      display: none;
    }
  }

  @media (max-width: ${breakPoints.celular}) {
    h1 {
      font-size: 20px;
    }

    a {
      font-size: 14px;
    }
  }
`

export const NavRow = styled.nav`
  display: none;

  @media (max-width: ${breakPoints.tablet}) {
    display: block;
    margin: 0 auto;

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 1.2em;
      justify-content: center;
    }

    a {
      text-decoration: none;
      color: black;
      font-size: 16px;

      &:hover {
        color: ${(props) => (props.theme as Theme).blueTitle};
      }
    }
  }

  @media (max-width: ${breakPoints.celular}) {
    ul {
      gap: 0.75em;
    }

    a {
      font-size: 14px;
    }
  }
`

export const ButtonThema = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  padding: 12px;
  border-radius: 12px;
  background-color: ${(props) => (props.theme as Theme).section.secundaria};
  border: 1px solid ${(props) => (props.theme as Theme).border};

  img {
    width: 20px;
    height: 20px;
    filter: invert(35%) sepia(70%) saturate(2598%) hue-rotate(226deg)
      brightness(99%) contrast(91%);
  }
`

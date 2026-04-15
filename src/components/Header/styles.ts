import styled from 'styled-components'

export const HeaderBar = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  border: 1px solid #000;
  background-color: #fff;
  color: #000;
  margin-bottom: 4px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding-bottom: 16px;
  padding-top: 16px;

  ul {
    display: flex;
    column-gap: 1.8em;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
  }
  h1 {
    font-size: 24px;
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
  background-color: #e2e8f0;
  border: #e2e8f0;
  color: #6366f1;

  img {
    width: 20px;
    height: 20px;
    filter: invert(35%) sepia(70%) saturate(2598%) hue-rotate(226deg)
      brightness(99%) contrast(91%);
  }
`
//#fafafa

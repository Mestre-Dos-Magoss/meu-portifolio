import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    list-style: none;
  }

  .container{
    max-width: 1280px;
    width: 100%;
    display: block;
    margin: 0 auto;
    padding-left: 32px;
    padding-right: 32px;
  }

  .paddingTopBottom {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  .h2 {
    font-size: 48px;
    margin-bottom: 24px;
    color: #000;
  }
`

export const InitialPresentation = styled.div`
  display: block;
  max-width: 512px;
  width: 100%;

  h2 {
    font-size: 72px;
    color: #000;
    margin-bottom: 16px;

    span {
      color: #6366f1;
      background-clip: text;
      background-image: linear-gradient(85deg, #6366f1, #babfff);
      -webkit-text-fill-color: transparent;
    }
  }

  > img {
    width: 584px;
    height: 390px;
    border-radius: 12px;
    margin-top: 80px;
  }

  p {
    line-height: 22px;
    font-size: 20px;
    color: #64748b;
    margin-bottom: 32px;
  }

  div {
    display: flex;
    column-gap: 16px;
    margin-bottom: 32px;
  }
`

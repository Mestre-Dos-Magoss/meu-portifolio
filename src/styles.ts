import styled, { createGlobalStyle } from 'styled-components'

export const breakPoints = {
  celular: '425px',
  tablet: '768px',
  desktop: '1024px'
}

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
    padding: 0 32px;

    @media (max-width: ${breakPoints.tablet}){
      padding: 0 32px;
      width: 90%;
      margin: 0;
    }
  }

  .paddingTopBottom {
    padding-top: 96px;
    padding-bottom: 96px;
    
    @media (max-width: ${breakPoints.tablet}){
      padding-top: 32px;
      padding-bottom: 32px;
    }
  }

  .h2 {
    font-size: 48px;
    margin-bottom: 24px;
    color: #000;

  @media (max-width: ${breakPoints.tablet}) {
    font-size: 32px;
  }
  }
`

export const InitialPresentation = styled.div`
  display: block;
  max-width: 100%;
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
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin-top: 80px;
    display: block;
  }

  p {
    line-height: 22px;
    font-size: 20px;
    color: #64748b;
    margin-bottom: 32px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 32px;
  }

  @media (max-width: ${breakPoints.tablet}) {
    max-width: 100%;

    > img {
      width: 100%;
      height: auto;
      margin-top: 40px;
    }

    h2 {
      max-width: 100%;
      font-size: 48px;
    }

    p {
      max-width: 100%;
    }

    div {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
    }
  }

  @media (max-width: ${breakPoints.celular}) {
    h2 {
      font-size: 40px;
    }

    p {
      font-size: 18px;
    }

    > img {
      margin-top: 24px;
    }
  }
`


// export const InitialPresentation = styled.div`
//   width:100%;
//   max-width:512px;

//   h2{
//     font-size:72px;
//     line-height:1.1;
//     margin-bottom:16px;
//   }

//   > img{
//     width:100%;
//     max-width:100%;
//     height:auto;
//     border-radius:12px;
//     margin-top:40px;
//     display:block;
//   }

//   p{
//     font-size:20px;
//     line-height:1.6;
//     margin-bottom:32px;
//   }

//   .buttons{
//     display:flex;
//     gap:16px;
//     flex-wrap:wrap;
//   }

//   @media(max-width:768px){

//     max-width:100%;

//     h2{
//       font-size:48px;
//     }

//     p{
//       max-width:100%;
//     }

//     .buttons{
//       flex-direction:column;
//     }
//   }
// `;
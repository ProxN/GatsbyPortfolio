import { createGlobalStyle } from "styled-components"
import Theme from "./Theme"
const { fontSizes, colors } = Theme

const GlobalStyle = createGlobalStyle`

    html{
        box-sizing:border-box;
        width:100%;   
    }
    *,
    *::before,
    *::after{
        margin:0;
        padding:0;
        box-sizing:inherit;
    }
    body{
        line-height:1.3;
        background-color:${colors.darkPrimary};
        font-size:${fontSizes.medium};
        width:100%;
        height:100%;
        font-family: 'Quicksand', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-weight:400;
    }
    body.blur{
        overflow:hidden;
    }
    a{
        display:inline-block;
        text-decoration:none;
        color:inherit;
        line-height:1.2;
        cursor: pointer;
        transition:all .3s ease-in-out .0ms;
        :hover,
        :active,
        :focus{
            color:${colors.secondaryColor};
        }
    }
    p{
        font-family: "Fira Sans", sans-serif;
  font-size: 16px;
  line-height: 1.7;
  font-weight: 400;
  word-spacing: 1px;
  color: #d2d2e7;
  opacity: 0.9;
  margin-bottom: 15px;
  span {
    color: #ff6b6b;
    font-weight: 700;
  }
  @media (max-width: 37.5em) {
    font-size: 14px;
  }
  @media (max-width: 30em) {
    font-size: 13px;
  }
    }
`

export default GlobalStyle

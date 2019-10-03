import { createGlobalStyle } from "styled-components";
import Theme from './Theme';
import media from './media';
const { fontSizes, colors } = Theme;

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
    body.blur #root > .container > *{
        filter:blur(5px);
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
        font-size: ${fontSizes.medium};
        line-height: 1.7;
        font-weight: 400;
        word-spacing: 1px;
        color: ${colors.lightGrey};
        opacity: 0.9;
        margin-bottom: 15px;
        span {
            color: ${colors.secondaryColor};
            font-weight: 700;
        }
        ${media.thone`font-size:14px;`}
        ${media.phablet`font-size:13px;`}

     

 }
`;

export default GlobalStyle;

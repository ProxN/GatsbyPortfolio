import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";
import media from "./media";
import * as Fonts from "./fonts";

const { fontSizes, colors } = Theme;
const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family:'Quicksand';
        src: url(${Fonts.QuickSandLight}) format('truetype');
        font-weight:300;
        font-style:normal;
        font-display:auto;
    }
    @font-face {
        font-family:'Quicksand';
        src: url(${Fonts.QuickSandRegular}) format('truetype');
        font-weight:400;
        font-style:normal;
        font-display:auto;
    }
    @font-face {
        font-family:'Quicksand';
        src: url(${Fonts.QuickSandMedium}) format('truetype');
        font-weight:500;
        font-style:normal;
        font-display:auto;
    }
    @font-face {
        font-family:'Quicksand';
        src: url(${Fonts.QuickSandSemiBold}) format('truetype');
        font-weight:600;
        font-style:normal;
        font-display:auto;
        
    }
    @font-face {
        font-family:'Quicksand';
        src: url(${Fonts.QuickSandBold}) format('truetype');
        font-weight:700;
        font-style:normal;
        font-display:auto;
    }
    @font-face {
        font-family:'Fira Sans';
        src: url(${Fonts.FiraSansLight}) format('truetype');
        font-weight:300;
        font-style:normal;
        font-display:auto;
    }
    @font-face {
        font-family:'Fira Sans';
        src: url(${Fonts.FiraSansRegular}) format('truetype');
        font-weight:400;
        font-style:normal;
        font-display:auto;
    }
    @font-face {
        font-family:'Fira Sans';
        src: url(${Fonts.FiraSansMedium}) format('truetype');
        font-weight:500;
        font-style:normal;
        font-display:auto;
    }
    @font-face {
        font-family:'Fira Sans';
        src: url(${Fonts.FiraSansBold}) format('truetype');
        font-weight:700;
        font-style:normal;
        font-display:auto;
        
    }

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

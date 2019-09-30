import {css} from 'styled-components';
// import Theme from './Theme';
// const {fontSizes,colors} = Theme;



const mixins = {

    flexBetween:css`
        display:flex;
        align-items:center;
        justify-content:space-between;
    `,
    padding:css`
    padding: 0 150px;
    @media (max-width: 40em) {
    padding: 0 100px;
     }
    @media (max-width: 30em) {
        padding: 0 50px;
    }
    @media (max-width: 23.5em) {
        padding: 0 25px;
    }
    `
};

export default mixins;
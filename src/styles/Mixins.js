import {css} from 'styled-components';
import media from './media';

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
    ${media.tablet`padding:0 100px;`}
    ${media.phablet`padding:0 50px;`}
    ${media.phone`padding:0 25px;`}
    `
};

export default mixins;
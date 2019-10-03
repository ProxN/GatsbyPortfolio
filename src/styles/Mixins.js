import {css} from 'styled-components';
import media from './media';

const mixins = {

    flexBetween:css`
        display:flex;
        align-items:center;
        justify-content:space-between;
    `,
    padding:css`
    padding: 0 150px;
    ${media.desktop`padding:0 100px;`}
    ${media.tablet`padding:0 50px;`}
    ${media.phablet`padding:0 25px;`}
    `
};

export default mixins;
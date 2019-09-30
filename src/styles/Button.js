import styled from 'styled-components';
import Theme from './Theme';
import { animated } from "react-spring";
const { colors, fontSizes } = Theme;



const Button = styled(animated.button)`
    background-color:transparent;
    padding:12px 40px;
    text-transform:uppercase;
    font-size:${fontSizes.small};
    border-radius:3px; 
    color:${colors.lightGrey};
    font-weight:500;
    letter-spacing:1px;
    cursor: pointer;
    position:relative;

`;

export default Button;
import styled from 'styled-components';
import media from './media';
import Theme from './Theme';
const {colors,fontSizes} = Theme;




const Heading = styled.h3`
font-size: ${fontSizes.h3};
color: ${colors.lightGrey};
letter-spacing: 1px;
position: relative;
font-weight: 700;
padding: 5px 40px 0px 0px;
display: inline-block;
margin-bottom: 30px;
span {
  color: ${colors.secondaryColor};
}
::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: ${colors.secondaryColor};
  position: absolute;
  top: 0;
}
::after {
  content: "";
  width: 30px;

  position: absolute;
  right: 0;
  top: 0;
  height: calc(50% + 5px);
  border-right: 1px solid ${colors.secondaryColor};
  border-bottom: 1px solid ${colors.secondaryColor};
}
  ${media.phone`font-size:20px`};
  ${media.tiny`font-size:15px`};

`;


export default Heading;
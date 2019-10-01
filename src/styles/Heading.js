import styled from 'styled-components';
import media from './media';

const Heading = styled.h2`
font-size: 30px;
color: #fff;
letter-spacing: 1px;
position: relative;
font-weight: 700;
padding: 5px 40px 0px 0px;
display: inline-block;
margin-bottom: 30px;
span {
  color: #ff6b6b;
}
::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #ff6b6b;
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
  border-right: 1px solid #ff6b6b;
  border-bottom: 1px solid #ff6b6b;
}
  ${media.phone`font-size:20px`};
  ${media.tiny`font-size:15px`};

`;


export default Heading;
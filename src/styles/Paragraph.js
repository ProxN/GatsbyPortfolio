import styled from 'styled-components';

const Paragraph = styled.p`
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
`;

export default Paragraph ;
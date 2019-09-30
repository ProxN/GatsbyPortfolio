import React from "react";
import styled from "styled-components";
import { useTrail, animated } from "react-spring";
import Theme from '../../styles/Theme';
import mixins from '../../styles/Mixins';
import config from '../../config/config';
const {fontSizes,colors} = Theme;


const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.lightGrey};
  height: 100%;
`;
const NavList = styled.ul`
  list-style: none;
  overflow: hidden;
  ${mixins.flexBetween};
  width: 100%;
  @media (max-width: 40em) {
    flex-direction: column;
    justify-content: center;
  }
`;
const NavItem = styled(animated.div)`
  font-size: ${fontSizes.xsmal};
  margin: 0 10px;
  @media (max-width: 40em) {
    font-size: 18px;
    margin:5px 0;
  }
`;
const NavLink = styled.a`
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px 5px;
`;

function NavLinks({ menuOpen }) {

  const {navLinks} = config;
  //Animation
  const LinksAnimations = useTrail(navLinks.length,{
    config:{ mass: 1, tension: 170, friction: 14 },
    delay:250,
    opacity: 1,
    transform: 'translateX(0px)',
    from: {
      opacity: 0,
      transform: 'translateX(100px)',
    },
  })
  return (
    <LinksContainer>
      <NavList menuOpen={menuOpen}>
        {LinksAnimations.map((propsStyle,index) => (
          <NavItem key={navLinks[index].name} style={propsStyle} >
            <NavLink href={navLinks[index].url}>
              {navLinks[index].name}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </LinksContainer>
  );
}
export default NavLinks;

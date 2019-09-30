import React from "react";
import styled from "styled-components";
import HamburgerToggler from "./HamburgerToggler";
import NavLinks from "./NavLinks";
import { animated, config, useTransition } from "react-spring";
import Theme from "../../styles/Theme";
const { colors } = Theme;
const MenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  visibility: ${props => (props.menuOpen ? "visible" : "hidden")};
  transition: all 250ms ease-in-out;
`;

const SideDrawer = styled(animated.div)`
  background-color: ${colors.lightPrimary};
  position: relative;
  height: 100%;
  right: 0;
  margin-left: auto;
  box-shadow: -10px 0px 30px -20px rgb(17, 17, 22);
  @media (max-width: 40em) {
    width: 50vw;
  }
  @media (max-width: 30em) {
    width: 75vw;
  }
`;

function MenuMobile({ menuOpen, toggleMenu }) {
  // Animations
  const DrawerTransistion = useTransition(menuOpen, null, {
    config: { duration: 250, ...config.default },
    from: { opacity: 0, transform: "translateX(100vw)" },
    enter: { opacity: 1, transform: "translateX(0vw)" },
    leave: { opacity: 0, transform: "translateX(100vw)" }
  });

  return (
    <div>
      <HamburgerToggler menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MenuContainer menuOpen={menuOpen}>
        {DrawerTransistion.map(
          ({ item, key, props }) =>
            item && (
              <SideDrawer key={key} style={props}>
                <NavLinks menuOpen />
              </SideDrawer>
            )
        )}
      </MenuContainer>
    </div>
  );
}

export default MenuMobile;

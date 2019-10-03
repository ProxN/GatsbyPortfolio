import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import {Mixins,media} from "../../styles/index";
import Logo from "../Icons/logo";


const NavbarContainer = styled.header`
  width: 100%;
  height: 60px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position:fixed;
  top:0;
  filter:none  !important;
  background:rgba(29, 29, 55,.95);
  z-index:15;
`;
const NavWrapper = styled.div`
  padding: 0 50px;
  height: 100%;
  ${Mixins.flexBetween};
  ${media.tablet`padding 0 20px;`};
`;
const LogoWrapper = styled.div`

  display:flex;
  align-items:center;
  justify-content:center;
`;

const LogoLink = styled.a`

  width:50px;
  height:50px;
  svg{
    height:100%;
    width:100%;
    vertical-align: middle;
  }

`;
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Show HamburgerToggler on Mobile
  const changeMobile = () => {
    window.matchMedia("(max-width:48em)").matches
      ? setIsMobile(true)
      : setIsMobile(false);
  };

  //
  useEffect(() => {
    changeMobile();
    window.addEventListener("resize", changeMobile);
    return () => window.removeEventListener("resize", changeMobile);
  }, []);


  return (
    <>
      <Helmet>
        <body className={menuOpen ? "blur" : ""} />
      </Helmet>
      <NavbarContainer>
        <NavWrapper>
          <LogoWrapper>
           <LogoLink>
             <Logo  />
           </LogoLink>
          </LogoWrapper>

          {isMobile ? (
            <MenuMobile
              menuOpen={menuOpen}
              toggleMenu={toggleMenu}
              isMobile={isMobile}
            />
          ) : (
            <MenuDesktop />
          )}
        </NavWrapper>
      </NavbarContainer>
    </>
  );
}

export default Navbar;

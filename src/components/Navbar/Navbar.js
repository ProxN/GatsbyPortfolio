import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import {Mixins} from "../../styles/index";


const NavbarContainer = styled.header`
  width: 100%;
  height: 60px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
const NavWrapper = styled.div`
  padding: 0 50px;
  height: 100%;
  ${Mixins.flexBetween};

  @media (max-width: 40em) {
    padding: 0 20px;
  }
`;

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Show HamburgerToggler on Mobile
  const changeMobile = () => {
    window.matchMedia("(max-width:40em)").matches
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
          <span>logo</span>

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

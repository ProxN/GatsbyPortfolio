import React from "react";
import styled from "styled-components";





const HamburgerToggler = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 11;
  cursor: pointer;
  position: relative;
  z-index:12;
`;
const Bar = styled.div`
    width:30px;
    height:2px;
    background-color:#fff;
    align-self:${props => props.align};
    transform:rotate(${props => (props.menuOpen ? "225deg" : "0deg")});
    transition:all .25s ease-in-out .0ms;
    ::before{
        content:"";
        position:absolute;
        width:${props => (props.menuOpen ? "100%" : "50%")};
        height:2px;
        background-color:#fff;
        top:${props => (props.menuOpen ? "0px" : "8px")};
        right:0;
        transition:all .25s ease-in-out .0ms;
        left:0;
    }
    ::after{
        content:"";
        position:absolute;
        width:50%;
        height:2px;
        width:${props => (props.menuOpen ? "100%" : "50%")};
        background-color:#fff;
        transition:all .25s ease-in-out .0ms;
        bottom:${props => (props.menuOpen ? "0px" : "8px")};
        transform:rotate(${props => (props.menuOpen ? "-90deg" : "0deg")});
        right:0;
    }
`;
function HamburgerBar({menuOpen,toggleMenu}) {
  return (
    <>
    <HamburgerToggler onClick={toggleMenu}>
      <Bar menuOpen={menuOpen} />
    </HamburgerToggler>
    </>
  );
}

export default HamburgerBar;

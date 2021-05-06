import React, { useState } from "react";
import styled from "styled-components";

import HeaderBackground from "../assets/desktop/bg-pattern-header.svg";
import Logo from "../assets/desktop/logo.svg";
import SunIcon from "../assets/desktop/icon-sun.svg";
import MoonIcon from "../assets/desktop/icon-moon.svg";
import { Link } from "react-router-dom";

const Header = ({ themeToggler }) => {
  const [toggleButton, setToggleButton] = useState(false);
  const switchToggle = () => {
    setToggleButton(!toggleButton);
    themeToggler();
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link to="/">
          <LogoImg src={Logo} alt="devjobs" />
        </Link>
        <ToggleButton>
          <SunImg src={SunIcon} alt="Sun Icon" />
          <SwitchBar onClick={switchToggle}>
            <NotchButton toggleButton={toggleButton} />
          </SwitchBar>
          <MoonImg src={MoonIcon} alt="Moon Icon" />
        </ToggleButton>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.header`
  background-image: url(${HeaderBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 140px;
`;

const HeaderWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  cursor: pointer;
`;

const ToggleButton = styled.div`
  width: 10%;
  height: 18px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const SunImg = styled.img``;

const SwitchBar = styled.div`
  width: 50%;
  height: 18px;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
`;

const NotchButton = styled.span`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #5964e0;
  transition: left 250ms ease-in-out;
  left: ${({ toggleButton }) => (toggleButton ? "70%" : "2px")};
`;

const MoonImg = styled.img``;

export default Header;

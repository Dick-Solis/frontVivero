import styled from 'styled-components';
import React, { useState } from "react";
import {
  FaBattleNet,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { NavLink } from 'react-router-dom';


//#region Styled Component
const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: #03899e;
  padding: 0 20px;
`;

const Wrapper = styled.nav`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  p {
    &:nth-child(2) {
      color: #fff;
    }
    &:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 500;
      color: #ffffff;
    }
  }
  svg {
    fill: #ffffff;
    margin-right: 0.5rem;
  }
`;

const Menu = styled.ul`
  height: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  list-style: none;
  @media (max-width: 960px) {
    background-color: #0d586f;
    position: absolute;
    z-index: 10;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.5s all ease;
  }
`;

const MenuItem = styled.li`
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MenuItemLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight:bold;
  text-decoration: none;
  height: 100%;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color: #006381;
    text-decoration:3px underline;
    div {
      svg {
        fill: #23394d;
      }
    }
}

div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight:bold;
  svg {
    display: none;
    fill: #056e97;
    margin-right: 0.5rem;
  }
}
@media (max-width: 960px) {
  width: 100%;
  align-items: flex-start;
  div {
    width: 100%;
    justify-content: left;
    svg {
      display: flex;
    }
  }
}
`;

const MobileIcon = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #0b4a78;
      margin-right: 0.5rem;
    }
}
`;

//#endregion

export function ComponentNavbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <FaBattleNet />
            <p>Grupo Rino</p>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink to="/" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                  INICIO
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink  to="/plantas" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaUserAlt />
                  PLANTAS
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaBriefcase />
                  UBICANOS
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaGlasses />
                  CONTÁCTANOS
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
}
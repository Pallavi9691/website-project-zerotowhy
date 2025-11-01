import React, { useState } from "react"
import { Link } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import styled from "styled-components"
import { Menu, X } from "lucide-react"
import logo from "../images/logo.png"

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #0f172a;
  color: white;
  height: 84px;
  display: flex;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`

const NavContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    height: 72px;
    width: auto;
    display: block;
  }

  a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
`

const MenuList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-left: 2rem;
  }

  a {
    position: relative;
    color: white;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #3b82f6;
    }

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: #3b82f6;
      transition: width 0.3s ease;
    }

    &:hover::after,
    &.active {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
  position: absolute;
  top: 84px;
    left: 0;
    width: 100%;
    background: #0f172a;
    flex-direction: column;
    align-items: center;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease;

    li {
      margin: 1.2rem 0;
    }
  }
`

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  const isHomePage =
    typeof window !== "undefined" && window.location.pathname === "/"

  return (
    <Nav>
      <NavContainer>
        {/* Logo */}
        <Logo>
          {isHomePage ? (
            <img src={logo} alt="ZeroToWhy logo" />
          ) : (
            <img src={logo} alt="ZeroToWhy logo" />
          )}
        </Logo>

        {/* Mobile toggle icon */}
        <MenuToggle onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </MenuToggle>

        {/* Menu items */}
        <MenuList open={menuOpen}>
          <li>
            {isHomePage ? (
              <ScrollLink
                to="hero"
                smooth
                duration={700}
                offset={-60}
                className="active"
                onClick={closeMenu}
              >
                Home
              </ScrollLink>
            ) : (
              <Link
                to="/"
                activeClassName="active"
                onClick={closeMenu}
              >
                Home
              </Link>
            )}
          </li>

          <li>
            <Link to="/courses" activeClassName="active" onClick={closeMenu}>
              Courses
            </Link>
          </li>
          <li>
            <Link to="/blog" activeClassName="active" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </MenuList>
      </NavContainer>
    </Nav>
  )
}

export default Navbar

import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MoblieIcon, NavMenu, NavItem, NavLinks, NavBtn } from './NavBarElements';

const NavBar = ({toggle}) => {
    return (
     <>
        <Nav >
            <NavbarContainer>
                <NavLogo><NavLinks to="hero">Devon Sihra</NavLinks></NavLogo>
                <MoblieIcon onClick={toggle}>
                    <FaBars/>
                </MoblieIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About Me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects">Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact">Contact Me</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <a
                    className="btn PrimaryBtn"
                    href="DevonSihra_resume.pdf"
                    target="_blank"
                    download
                    >
                        Resume
                    </a>
                    
                </NavBtn>
            </NavbarContainer>
        </Nav>
     </>
    );
};

export default NavBar;

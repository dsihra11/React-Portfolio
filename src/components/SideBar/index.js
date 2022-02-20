import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBtnWrap, SideBarRoute } from './SideBarElements';

const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarWrapper>
            <SideBarMenu>
                <SideBarLink to="about" onClick={toggle}>
                    About Me
                </SideBarLink>
                <SideBarLink to="projects" onClick={toggle}>
                    Projects
                </SideBarLink>
                <SideBarLink to="contact" onClick={toggle}>
                    Contact Me
                </SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBarRoute to="/">Resume</SideBarRoute>
            </SideBtnWrap>
        </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;

import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, SocialMedia, SocialMediaWrap, SocialIcons, WebsiteRights, SocialLogo, SocialIconLink, NavLinks } from './FooterElements';


export const Footer = () => {
  return (
    <FooterContainer>
        
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo>
                    <NavLinks to="hero">Devon Sihra</NavLinks>
                </SocialLogo>
                <WebsiteRights>
                     © {new Date().getFullYear()} All rights reserved.
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="https://www.linkedin.com/in/devon-sihra/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                
                    <SocialIconLink href="https://github.com/dsihra1" target="_blank" aria-label="Github"><FaGithub/></SocialIconLink>
                
                    <SocialIconLink href="mailto:devonsihra@hotmail.com?Subject=From your portfolio" target="_blank" aria-label="Email"><FaEnvelope/></SocialIconLink>
                </SocialIcons>

            </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
   );
};

 export default Footer;

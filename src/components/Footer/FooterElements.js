import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const FooterContainer = styled.footer`
  background-color: #191919;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto; 
`;

export const FooterLinksContainer = styled.div`
  display: flex; 
  justify-content: center;

  @media screen and (max-width: 820px) {
      padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex; 

  @media screen and (max-width: 420px) {
      flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
      margin: 0;
      padding: 10px;
      width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-deecoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
      color: #01bf71;
      transition: 0.3s ease-out;
  }

`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;

  @media screen and (max-width: 1024px) {
      max-width: 1000px;
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
      flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 46px;
  margin-top: 30px;
  margin-left: 50px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
      margin-left: 0;
      margin-bottom: 0;
      margin-bottom: 10px;
      margin-top: 20px;
  }
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  margin-left: 50px;

    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-bottom: 0;
        margin-bottom: 10px;
    }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

    @media screen and (max-width: 768px) {
        margin-left: 0;
        margin-bottom: 0;
 
    }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-left: 24px;
`;


export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
      border-bottom: 3px solid #01bf71;
  }
`;
import React from "react";
import { ContactWrapper, Email } from "./ContactElements";
import {FaEnvelope, FaPhone} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Let's Get In Touch</div>
        <div className="BigCard">
          <Email>
            <span id="iconMedia"><FaEnvelope style={{height: '35px', weight: '35px'}}/></span>
            <span id="SocialText">devonsihra@hotmail.com</span>
          </Email>
          <Email>
            <span id="iconMedia"><FaPhone style={{height: '35px', weight: '35px'}}/></span>
            <span id="SocialText">(289)-689-3194</span>  
          </Email>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;

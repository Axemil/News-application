import React, { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";
import WOW from 'wow.js';

const Footer = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  })
  return (
    <div className="footer">
      <div className="div-footer">
        <h3 className="wow fadeInLeft" data-wow-delay="0.3s"><a href="https://t.me/axemilon"><FontAwesomeIcon icon={faTelegram}/> Телеграмм</a></h3>
        <h3 className="wow fadeInRight" data-wow-delay="0.3s"><a href="https://github.com/Axemil/News-application/tree/develop"><FontAwesomeIcon icon={faGithub}/> Github</a></h3>
      </div>
      <h4 className="wow fadeInUp" data-wow-delay="0.3s" style={{textAlign: 'center'}}>Copyright @ 2019 Kordonets . All rights reserved</h4>
    </div>
  )
}

export default Footer;

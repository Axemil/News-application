import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper,faAnchor, faFlag, faAddressCard, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Drawer from '../UI/Drawer';
import WOW from 'wow.js';

const Header = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  })
  const handler = () => document.querySelector('.drawerMenu').classList.remove('active');
  return (
    <div className={handler} className="header">
      <div className="div__header">
        <div className="logo wow fadeInLeft" data-wow-delay="0.3s">
          <Link className="link-hover" to="/"><FontAwesomeIcon icon={faNewspaper} /> News</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link className="link-hover wow fadeIn" data-wow-delay="0.3s" to="/Hot"><FontAwesomeIcon icon={faAnchor} /> Новости Одессы</Link>
            </li>
            <li>
              <Link className="link-hover wow fadeIn" data-wow-delay="0.3s" to="/UK"><FontAwesomeIcon icon={faFlag} /> Новости Украины</Link>
            </li>
            <li>
              <Link className="link-hover wow fadeIn" data-wow-delay="0.3s" to="/US"><FontAwesomeIcon icon={faAddressCard} /> О проекте</Link>
            </li>
            <li>
              <Link className="link-hover wow fadeIn" data-wow-delay="0.3s" to="/search"><FontAwesomeIcon icon={faSearch} /> Поиск</Link>
            </li>
          </ul>
        </nav>
        <Drawer className="drawer"/>
      </div>
    </div>
  );
};

export default Header;

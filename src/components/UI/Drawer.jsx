import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faAnchor,
  faFlag,
  faAddressCard,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import WOW from "wow.js";

const Drawer = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  });
  const handler = () => document.querySelector('.drawerMenu').classList.toggle('active');
  return (
    <div>
      <div onClick={handler} data-wow-delay="0.3s" className="drawerIcon wow fadeInRight">
        <FontAwesomeIcon icon={faServer} />
      </div>
      <div className="drawerMenu">
        <ul>
          <li>
            <Link onClick={handler} className="link-hover wow fadeIn" to="/Hot">
              <FontAwesomeIcon icon={faAnchor} /> Новости Одессы
            </Link>
          </li>
          <li>
            <Link onClick={handler} className="link-hover wow fadeIn" to="/UK">
              <FontAwesomeIcon icon={faFlag} /> Новости Украины
            </Link>
          </li>
          <li>
            <Link onClick={handler} className="link-hover wow fadeIn" to="/US">
              <FontAwesomeIcon icon={faAddressCard} /> О проекте
            </Link>
          </li>
          <li>
            <Link onClick={handler} className="link-hover wow fadeIn" to="/search">
              <FontAwesomeIcon icon={faSearch} /> Поиск
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;

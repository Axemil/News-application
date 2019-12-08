import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faFlag,
  faAddressCard,
  faSearch,
  faFlagUsa
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
      <div onClick={handler} className="drawerIcon">
        <FontAwesomeIcon icon={faServer} />
      </div>
      <div className="drawerMenu">
        <ul>
          <li>
            <Link onClick={handler} className="link-hover wow fadeIn" to="/USANews">
              <FontAwesomeIcon icon={faFlagUsa} /> Новости США
            </Link>
          </li>
          <li>
            <Link onClick={handler} className="link-hover wow fadeIn" to="/UkraineNews">
              <FontAwesomeIcon icon={faFlag} /> Новости Украины
            </Link>
          </li>
          <li>
            <Link onClick={handler} className="link-hover wow fadeIn" to="/AboutUs">
              <FontAwesomeIcon icon={faAddressCard} /> О проекте
            </Link>
          </li>
          <li>
            <Link onClick={handler} className="link-hover wow fadeIn" to="/Searcher">
              <FontAwesomeIcon icon={faSearch} /> Поиск
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;

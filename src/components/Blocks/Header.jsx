import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper,faAnchor, faFlag, faAddressCard, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="div__header">
        <div className="logo">
          <Link className="link-hover" to="/"><FontAwesomeIcon icon={faNewspaper} /> News</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link className="link-hover" to="/Hot"><FontAwesomeIcon icon={faAnchor} /> Новости Одессы</Link>
            </li>
            <li>
              <Link className="link-hover" to="/UK"><FontAwesomeIcon icon={faFlag} /> Новости Украины</Link>
            </li>
            <li>
              <Link className="link-hover" to="/US"><FontAwesomeIcon icon={faAddressCard} /> О проекте</Link>
            </li>
            <li>
              <Link className="link-hover" to="/search"><FontAwesomeIcon icon={faSearch} /> Поиск</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

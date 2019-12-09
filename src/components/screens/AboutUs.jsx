import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faNewspaper, faAd, faBook} from "@fortawesome/free-solid-svg-icons";
import { faReact, faSass, faCss3, faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";

const AboutUs = () => {
  return (
    <div className="page">
      <h1><FontAwesomeIcon icon={faAddressCard} /> О нас</h1>
      <h2>Проект был подготовлен для Одесского Национального Политехнического Университета</h2>
      <h2>Это новостной сайт с использований технологий: </h2>
      <ul className="list-tech">
        <li>
          <p>News API <FontAwesomeIcon icon={faNewspaper} /></p>
        </li>
        <li>
          <p>React JS <FontAwesomeIcon icon={faReact} /></p>
        </li>
        <li>
          <p>SASS <FontAwesomeIcon icon={faSass} /></p>
        </li>
        <li>
          <p>CSS <FontAwesomeIcon icon={faCss3} /></p>
        </li>
        <li>
          <p>HTML <FontAwesomeIcon icon={faHtml5} /></p>
        </li>
        <li>
          <p>Axios <FontAwesomeIcon icon={faAd} /></p>
        </li>
        <li>
          <p>Wow JS <FontAwesomeIcon icon={faBook} /></p>
        </li>
        <li>
          <p>JS <FontAwesomeIcon icon={faJs} /></p>
        </li>
      </ul>
      <h2>Авторы проекта: Владислав Кордонец, Андрей Лукянчиков</h2>
    </div>
  )
}

export default AboutUs

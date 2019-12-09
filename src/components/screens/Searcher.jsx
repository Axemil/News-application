import React, { useEffect, useState } from "react";
import NewsCard from "../UI/NewsCard";
import Dropdown from "../UI/Dropdown";
import axios from "axios";
import WOW from "wow.js";

const Searcher = () => {
  //Заглушки для дропдауна
  const countryArray = ["us", "ua", "gb", "ru", "it", "jp", "pl"];
  const categoryArray = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology"
  ];
  //Массив новостей
  const [news, setNews] = useState([]);
  //Стейты для конфигураций запроса
  const [typeCountry, setTypeCountry] = useState("business");
  const [typeCategory, setTypeCategory] = useState("us");
  //Строка с запросом
  const apiKey = "apiKey=4df43511f328465aa591c132a2dcfecf";

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  });
  const submitSearch = () => {
    console.log(typeCategory, typeCountry)
    const fetchData = async () => {
      const result = await axios(`https://newsapi.org/v2/top-headlines?country=${typeCountry}&category=${typeCategory}&${apiKey}`);
      setNews(result.data.articles);
    };
    console.log(news)
    fetchData();
  };
  return (
    <div className="page">
      <h1 style={{ textAlign: "center" }}>Поиск новостей</h1>
      <div className="section-chose">
        <div className="chose">
          <div className="box">
            <select onChange={e => setTypeCountry(e.target.value)}>
              {countryArray.map(item => <option value={item}>{item}</option>)}
            </select>
          </div>
        </div>
        <div className="chose">
          <div className="box">
            <select onChange={e => setTypeCategory(e.target.value)}>
              {categoryArray.map(item => <option value={item}>{item}</option>)}
            </select>
          </div>
        </div>
      </div>
      <div className="submit-section">
        <div onClick={submitSearch} className="button-submit">SUBMIT</div>
      </div>
      <div className="list-cards wow fadeIn" data-wow-delay="1s">
        {news.map(item => (
          <NewsCard
            title={item.title}
            author={item.author}
            image={item.urlToImage}
            description={item.description}
            site={item.source.name}
            link={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Searcher;

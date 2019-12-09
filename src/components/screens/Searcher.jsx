import React, { useEffect, useState } from "react";
import NewsCard from "../UI/NewsCard";
import Dropdown from "../UI/Dropdown";
import axios from "axios";
import WOW from "wow.js";

const Searcher = () => {
  //Заглушки для дропдауна
  const typeArray = ["top-headlines", "everything"];
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
  const [typeSearching, setTypeSearching] = useState("");
  const [typeCountry, setTypeCountry] = useState("");
  const [typeCategory, setTypeCategory] = useState("");
  //Строка с запросом
  const apiKey = "apiKey=4df43511f328465aa591c132a2dcfecf";
  const request = `https://newsapi.org/v2/${typeSearching}?q=${typeCategory}&country=${typeCountry}&sortBy=publishedAt&${apiKey}`;
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  });
  const submitSearch = () => {};
  return (
    <div className="page">
      <h1 style={{ textAlign: "center" }}>Поиск новостей</h1>
      <div className="section-chose"></div>
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

import React, { useEffect, useState } from "react";
import NewsCard from "../UI/NewsCard";
import axios from "axios";
import WOW from "wow.js";

const Home = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const wow = new WOW();
    wow.init();
    const fetchData = async () => {
      const result = await axios(
        "https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=4df43511f328465aa591c132a2dcfecf"
      );
      setNews(result.data.articles);
    };
    fetchData();
  }, []);
  return (
    <div className="page">
      <h1 style={{textAlign: 'center'}}>Главная страница со всеми новостями bitcoin</h1>
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

export default Home;

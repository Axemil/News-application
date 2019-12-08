import React, { useEffect, useState } from "react";
import NewsCard from "../UI/NewsCard";
import axios from 'axios';

const Home = () => {
  const [news,setNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=4df43511f328465aa591c132a2dcfecf',
      );
      setNews(result.data.articles);
    };
    fetchData();
  }, []);
  return (
    <div className="home-page">
      <h1>Главная страница со всеми новостями bitcoin</h1>
      <div className="list-cards">
        {/* <NewsCard /> */}
        {news.map((item => <NewsCard title={item.title} image={item.urlToImage} description={item.description} link={item.url} />))}
      </div>
    </div>
  );
};

export default Home;

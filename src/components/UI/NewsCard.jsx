import React from "react";

const NewsCard = props => {
  const { title, image, description, link, author, site } = props;
  return (
    <div className="news-card">
      <div
        style={{ background: `url('${image}') no-repeat` }}
        className="logo-card"
      >
        <p className="title-card">{title}</p>
      </div>
      <div className="body-card">
        <p className="description-card">{description}</p>
        <div className="section-links">
          <p className="author-description">
            Author: {author ? author : "-"}, Site: {site ? site : "-"}
          </p>
          <p className="author-card">
            <a href={link} rel="noopener noreferrer" target="_blank">Link to article</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

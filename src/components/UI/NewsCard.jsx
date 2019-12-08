import React from 'react'

const NewsCard = (props) => {
  const {title, image, description, link} = props;
  return (
    <div className="news-card">
      <div style={{background: `url('${image}') no-repeat`}} className="logo-card">
        <p className='title-card'>{title}</p>
      </div>
      <div className="body-card">
        <p className="description-card">{description}</p>
        <p className="author-card"><a href={link}>Article</a></p>
      </div>
    </div>
  )
}

export default NewsCard

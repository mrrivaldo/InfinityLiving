import "./news.css";
import Button from "./Button";
const NewsCard = ({ date, title, image }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} className="news-image" />
      <div className="news-content">
        <p className="news-date">{date}</p>
        <p className="news-description">{title}</p>
        <a href="#" className="news-link">Find out more</a>
      </div>
    </div>
  );
};

const News = ({ newsItems }) => {
  return (
    <section className="news-section">
      <h2 className="news-title">Latest news</h2>
      <div className="news-grid">
        {newsItems.map((news, index) => (
          <NewsCard key={index} date={news.date} title={news.title} image={news.image} />
        ))}
      </div>
  
    </section>
  );
};

export default News;

import PropTypes from "prop-types";
const NewsItem = ({ news }) => {
  return (
    <>
      <div className="news-item">
        <div className="news-item-content">
          <h6>{news.title}</h6>
          <p className="text-lg">{news.content}</p>
          <div className="news-item-images">
            {news.images.map((image, index) => (
              <img src={image} alt={news.title} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

NewsItem.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default NewsItem;

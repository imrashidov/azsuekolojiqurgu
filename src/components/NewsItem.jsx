import data from "../data/data";

const NewsItem = () => {
  return (
    <>
      {data.newsItems.map((item) => (
        <div className="news-item" key={item.id}>
          <div className="news-item-content">
            <h6>{item.title}</h6>
            <p className="text-lg">{item.description}</p>
            <div className="news-item-images">
              {item.images.map((image) => (
                <img src={image} alt={item.title} key={image} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default NewsItem;

import { CiClock1 } from "react-icons/ci";
const LatestNewsItem = ({ news }) => {
  console.log(news);
  return (
    <>
      {news.slice(0, 4).map((item) => (
        <div className="latest-news-item" key={item._id}>
          <img src={item.images[1]} alt="Latest News" />
          <h6>{item.title}</h6>
          <div className="latest-news-date">
            <CiClock1 />
            <p>{item.date}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default LatestNewsItem;

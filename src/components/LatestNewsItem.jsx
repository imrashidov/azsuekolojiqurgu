import { CiClock1 } from "react-icons/ci";
import data from "../data/data";

const LatestNewsItem = () => {
  return (
    <>
      {data.latestNewsItem.map((item) => (
        <div className="latest-news-item" key={item.id}>
          <img src={item.img} alt="news1" />
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

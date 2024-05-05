import LatestNewsItem from "../components/LatestNewsItem";
import NewsItem from "../components/NewsItem";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();

  return (
    <section id="news">
      <div className="news-container">
        <div className="news-main">
          <div className="news-contents">
            <button className="news-back" onClick={() => navigate(-1)}>
              <FaChevronLeft />
              <span>Geriyə</span>
            </button>
            <div className="news-title">
              <h1>XƏBƏRLƏR</h1>
            </div>
            <div className="news-content">
              <aside>
                <h5>SON XƏBƏRLƏR</h5>
                <div className="latest-news-items">
                  <LatestNewsItem />
                </div>
              </aside>
              <div className="news-items bg-white w-full rounded-md">
                <NewsItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

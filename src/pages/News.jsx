import { useEffect, useState } from "react";
import LatestNewsItem from "../components/LatestNewsItem";
import NewsItem from "../components/NewsItem";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const News = () => {
  const navigate = useNavigate();

  const [news, setNews] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/news`);
        if (response.ok) {
          const data = await response.json();
          setNews(data);
        } else {
          message.error("Xəbər yüklənərkən xəta baş verdi");
        }
      } catch (error) {
        console.log(error);
        message.error("Server error. Please try again later.");
      }
    };
    fetchData();
  }, [apiUrl]);

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
                  <LatestNewsItem news={news} />
                </div>
              </aside>
              <div className="news-items bg-white w-full rounded-md">
                {news.map((newsItem) => (
                  <NewsItem news={newsItem} key={newsItem._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

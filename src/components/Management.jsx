import { useEffect, useState } from "react";
import { message } from "antd";
import managementImg from "../assets/management.jpg";

const Management = () => {
  const [management, setManagement] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/managements`);
        if (response.ok) {
          const data = await response.json();
          setManagement(data);
        } else {
          message.error("Rəhbərlik yüklənərkən xəta baş verdi");
        }
      } catch (error) {
        console.log(error);
        message.error("Server error. Please try again later.");
      }
    };
    fetchData();
  }, [apiUrl]);

  return (
    <section id="management">
      <div className="management-container">
        <div className="management-main">
          <div className="management-contents">
            <div className="management-title">
              <h1>RƏHBƏRLİK</h1>
            </div>
            <div className="management-items">
              <img src={managementImg} alt="Management Building" />
              <div className="management-persons">
                {management.map((person) => (
                  <div key={person._id} className="management-person">
                    <img src={person.img} />
                    <div className="person-description">
                      <h6>{person.role}</h6>
                      <p>
                        {person.name} {person.surname}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;

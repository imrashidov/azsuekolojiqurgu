import managementImg from "../assets/management.jpg";
import data from "../data/data";

const Management = () => {
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
                {data.managementItems.map((person) => (
                  <div key={person.id} className="management-person">
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

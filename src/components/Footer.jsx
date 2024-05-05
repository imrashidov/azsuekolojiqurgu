import logo from "../assets/logo.png";
import data from "../data/data";
import { FaChevronUp } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-main">
          <img src={logo} alt="Logo" />
          <div className="footer-routes">
            <ul>
              {data.navbarRoutes.map((route) => (
                <li key={route.id}>
                  <HashLink
                    to={route.path}
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                  >
                    {route.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <FaChevronUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

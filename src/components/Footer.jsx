import logo from "../assets/logo.png";
import { FaChevronUp } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  const footerRoutes = [
    {
      id: 1,
      path: "/#about",
      name: "Haqqımızda",
    },
    {
      id: 2,
      path: "/#management",
      name: "Rəhbərlik",
    },
    {
      id: 3,
      path: "/#gallery",
      name: "Qalereya",
    },
    {
      id: 4,
      path: "/#contact",
      name: "Bizimlə Əlaqə",
    },
  ];
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-main">
          <img src={logo} alt="Logo" />
          <div className="footer-routes">
            <ul>
              {footerRoutes.map((route) => (
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

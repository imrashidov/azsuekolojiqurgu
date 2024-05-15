import { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/header-logo.png";
import logo2 from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarRoutes = [
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

  const location = useLocation();
  const isNewsPage = location.pathname.includes("/news");

  const [navMenu, setNavMenu] = useState(false);

  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <header>
      <div className={`nav-container ${isNewsPage && "new-nav-container "}`}>
        {navMenu && (
          <motion.div
            className="nav-menu"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ type: "just", stiffness: 100 }}
          >
            <div className="nav-menu-container">
              <motion.button
                onClick={handleNavMenu}
                className="nav-menu-button"
                whileTap={{
                  scale: 0.7,
                }}
              >
                <IoCloseOutline className="nav-menu-close" />
              </motion.button>
              <div className="nav-menu-main">
                <div className="nav-menu-logo">
                  <img src={logo2} alt="Logo" />
                </div>
                <div className="nav-menu-links">
                  <ul>
                    {navbarRoutes.map((route) => (
                      <li key={route.id}>
                        <HashLink
                          to={route.path}
                          scroll={(el) =>
                            el.scrollIntoView({
                              behavior: "smooth",
                            })
                          }
                          onClick={handleNavMenu}
                        >
                          {route.name}
                        </HashLink>
                      </li>
                    ))}
                    <li>
                      <Link to="/news" onClick={handleNavMenu}>
                        Xəbərlər
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="nav-menu-contact">
                  <div className="nav-menu-contact-item">
                    <MdAlternateEmail />
                    <span>
                      <p>azsu.ekoqurgu@mail.ru</p>
                    </span>
                  </div>
                  <div className="nav-menu-contact-item">
                    <FaPhoneAlt />
                    <span>
                      <p>(+994 12) 408-72-45</p>
                      <p>(+994 50) 213-20-63</p>
                      <p>(+994 70) 715-55-00</p>
                    </span>
                  </div>
                  <div className="nav-menu-contact-item">
                    <FaLocationDot />
                    <p>
                      Binəqədi ray., Novxanı qəs., Dəniz sahili, Sarıqaya küç.
                      AZ0119
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        <div className="nav-main">
          <motion.button
            onClick={handleNavMenu}
            className="nav-menu-button"
            whileTap={{
              scale: 0.7,
            }}
          >
            <RxHamburgerMenu />
          </motion.button>
          <div className="nav-links">
            <ul>
              {navbarRoutes.slice(0, 2).map((route) => (
                <li key={route.id}>
                  <HashLink
                    scroll={(el) =>
                      el.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                    to={route.path}
                  >
                    {route.name}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-links">
            <ul>
              {navbarRoutes.slice(2, 4).map((route) => (
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
            <Link className="nav-news" to="/news">
              Xəbərlər
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginCard from "./LoginCard";
import icon from "./../images/icon.png";
import { Button } from "./ui/button";
import { FaUser } from "react-icons/fa";

const navLinks = [
  {
    label: "Home",
    href: "home",
  },
  {
    label: "About Us",
    href: "aboutUs",
  },
  {
    label: "Features",
    href: "features",
  },
  {
    label: "Mission & Vision",
    href: "missionAndVision",
  },
];

const Navigation = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setNavbarVisible(false);
      } else {
        // Scrolling up
        setNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`top-0 w-full py-3 flex justify-between items-center transition-transform duration-300 ${
          navbarVisible ? "translate-y-0" : "-translate-y-full"
        } ${lastScrollY > 50 ? "" : "bg-transparent"} z-50 `}
      >
        <RouterLink to="home" className="w-[120px]">
          <img src={icon} alt="icon" />
        </RouterLink>
        <div className="flex items-center gap-x-10">
          <div>
            <div className="flex items-center gap-x-10">
              {navLinks.map(({ label, href }) => (
                <ScrollLink
                  to={href}
                  smooth={true}
                  duration={500}
                  key={href}
                  className="text-sm cursor-pointer"
                >
                  {label}
                </ScrollLink>
              ))}
            </div>
          </div>
          <Button
            className="px-6 rounded-full"
            type="button"
            onClick={() => setLoginModal(true)}
          >
            <FaUser size={10} />
          </Button>
        </div>
      </nav>
      {loginModal && <LoginCard closeModal={() => setLoginModal(false)} />}
    </>
  );
};

export default Navigation;

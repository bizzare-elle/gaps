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
    href: "aboutus",
  },
  {
    label: "Features",
    href: "features",
  },
  {
    label: "Mission & Vision",
    href: "missionvision",
  },
];

const Navigation = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [navbarQue, setNavbarQue] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarQue(window.screenY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`top-0 w-full py-3 flex justify-between items-center ${
          navbarQue ? "bg-white/40" : "bg-transparent"
        }`}
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
      {loginModal && <LoginCard />}
    </>
  );
};

export default Navigation;

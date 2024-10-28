import icon from "./../images/icon.png";
import { Button } from "./ui/button";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Mission & Vision",
    href: "/mission-and-vision",
  },
];

const Navigation = () => {
  return (
    <nav className="top-0 w-full py-3 flex justify-between items-center">
      <div className="w-[120px]">
        <img src={icon} alt="icon" />
      </div>
      <div className="flex items-center gap-x-10">
        <div>
          <ul className="flex items-center gap-x-10">
            {navLinks.map((item) => (
              <li key={item.href} className="text-sm cursor-pointer">
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Button className="px-6 rounded-full">
          <FaUser size={10} />
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;

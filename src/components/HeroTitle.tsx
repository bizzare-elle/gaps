import { Button } from "./ui/button";
import { Link as ScrollLink } from "react-scroll";

const HeroTitle = () => {
  const myTeam = "myTeam";
  const aboutUs = "aboutUs";

  return (
    <div className="flex flex-col gap-y-[40px] w-[900px] leading-loose">
      <div className="flex flex-col gap-y-3">
        <h3 className="font-bold">
          Mastery Meets Merit – Certifying Top-Tier Mentors at Colegio de San
          Gabriel Arcangel
        </h3>
        <span className="text-primary tracking-wider">
          Push Boundaries. Prove Excellence. Earn Your Certification.
        </span>
      </div>
      <div className="flex gap-x-5">
        <Button>
          <ScrollLink to={aboutUs} smooth={true} duration={500}>
            Learn More
          </ScrollLink>
        </Button>
        <Button variant="outline" type="button">
          <ScrollLink to={myTeam} smooth={true} duration={500}>
            Meet The Team
          </ScrollLink>
        </Button>
      </div>
    </div>
  );
};

export default HeroTitle;

import { Button } from "./ui/button";

const HeroTitle = () => {
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
        <Button>Learn More</Button>
        <Button variant="outline" type="button">
          Meet The Team
        </Button>
      </div>
    </div>
  );
};

export default HeroTitle;

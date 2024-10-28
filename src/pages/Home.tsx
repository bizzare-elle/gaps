import Navigation from "../components/Navigation";
import HeroTitle from "../components/HeroTitle";
import heroimage from "./../images/hero-image.png";
const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col max-w-[1600px] m-auto">
      <Navigation />
      <div className="flex gap-x-20">
        <div className="mt-[18%]">
          <HeroTitle />
        </div>
        <div className="mt-[10%]">
          {/* <div className="bg-primary rounded-full w-[400px] block"></div> */}
          <img src={heroimage} alt="Hero Image" />
        </div>
      </div>

      <div className="bg-primary flex m-auto w-[80%] justify-center p-10 rounded-md mb-[-30px]">
        <h4 className=" text-white font-medium">
          Push Boundaries. Prove Excellence. Earn Your Certification.
        </h4>
      </div>
    </div>
  );
};

export default Home;

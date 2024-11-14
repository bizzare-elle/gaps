  import HeroTitle from "../components/HeroTitle";
import heroimage from "./../images/hero-image.png";

const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col max-w-[1600px] m-auto">
      <div className="flex gap-x-20">
        <div className="mt-[18%]">
          <HeroTitle />
        </div>
        <div className="flex">
          <div className="bg-primary blur-[250px] absolute rounded-full w-[700px] h-[700px] z-[-100] block"></div>
          <img className="mt-[15%]" src={heroimage} alt="Hero Image" />
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

import { Link as Element } from "react-scroll";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Features from "./pages/Features";
import MissionAndVision from "./pages/MissionAndVision";
import Footer from "./pages/Footer";
import MyTeam from "./pages/MyTeam";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="top-0 w-full px-[8%] sticky m-auto">
        <Navigation />
      </header>

      <main className="flex-grow">
        <Element name="home">
          <Home />
        </Element>
        <Element name="aboutus">
          <AboutUs />
        </Element>
        <Element name="features">
          <Features />
        </Element>
        <Element name="missionvision">
          <MissionAndVision />
        </Element>
        <Element>
          <MyTeam />
        </Element>
      </main>

      <Footer />
    </div>
  );
};

export default App;

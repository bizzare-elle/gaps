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
        <Element to="home" name="home">
          <Home />
        </Element>
        <Element to="aboutUs" name="aboutUs">
          <AboutUs />
        </Element>
        <Element to="features" name="features">
          <Features />
        </Element>
        <Element to="missionAndVision" name="missionAndVision">
          <MissionAndVision />
        </Element>
        <Element to="myTeam" name="myTeam">
          <MyTeam />
        </Element>
      </main>

      <Footer />
    </div>
  );
};

export default App;

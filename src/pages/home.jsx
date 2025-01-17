import Hero from "../components/hero";
import "../App.css";
import HeroParallax from "../components/atcParallel";
import { useMediaQuery } from "react-responsive";
import gallery from "../data/gallery";
import timelineData from "../data/timeline";
import Timeline from "../components/timeline";
import MagnetLines from "../components/magnetLines";
import About from "../components/about";
import ExtendedAbout from "../components/extAbout";
import FacultyAdvisors from "../components/faculty";
import UpcomingEvents from "../components/upcomingEvents";
import MagnetLines2 from "../ui-comp/magnetic";

const Home = () => {
  const isPhone = useMediaQuery({ query: '(max-width: 600px)' })
 
  return (
        <div>
          <div>
          <Hero />
          <About />
          <FacultyAdvisors/>
          <ExtendedAbout />
          <HeroParallax gallery={gallery} />
          <Timeline data={timelineData} />
          <UpcomingEvents/>
          {isPhone?<MagnetLines2/>:<MagnetLines/>}
        </div>
        </div>
  );
};

export default Home;

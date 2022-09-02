import Contact from "../Contact/Contact";
import Profile from "../Profile/Profile";
import Projects from "../Projects/Projects";
import Welcome from "../Welcome/Welcome";
import "./Sections.css";

const Sections = () => {
  return (
    <div className="sections">
      <Welcome />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );
};

export default Sections;

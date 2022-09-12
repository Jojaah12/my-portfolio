import Contact from "../Contact/Contact";
import Profile from "../Profile/Profile";
import Welcome from "../Welcome/Welcome";
import "./Sections.css";

const Sections = () => {
  return (
    <section className="sections">
      <Welcome />
      <Profile />
      <Contact />
    </section>
  );
};

export default Sections;

import BarChart from "../../components/BarChart/BarChart";
import Competence from "../../components/Competence/Competence";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import "./Profile.css";

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <SectionTitle sectionTitle="" />
      <Competence />
      <BarChart />
    </section>
  );
};

export default Profile;

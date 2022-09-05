import Competence from "../../components/Competence/Competence";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import BarChart from "../../components/BarChart/BarChart";

import "./Profile.css";

const Profile = () => {
  return (
    <section id="profile" className="profile-section">
      <SectionTitle sectionTitle="about" lineColor="#000" />
      <Competence />
      <BarChart />
    </section>
  );
};

export default Profile;

import Competence from "../../components/Competence/Competence";
/* import SectionTitle from "../../components/SectionTitle/SectionTitle"; */
import BarChart from "../../components/BarChart/BarChart";

import "./Profile.css";

const Profile = () => {
  return (
    <div id="profile" className="profile-section">
      <h1 className="about">
        <span>ABOUT</span>
      </h1>
      <Competence />
      <BarChart />
    </div>
  );
};

export default Profile;

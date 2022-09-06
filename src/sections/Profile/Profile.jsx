import Competence from "../../components/Competence/Competence";

import "./Profile.css";

const Profile = () => {
  return (
    <div id="profile" className="profile-section">
      <h1 className="about">
        <span className="line">ABOUT</span>
      </h1>
      <Competence />
    </div>
  );
};

export default Profile;

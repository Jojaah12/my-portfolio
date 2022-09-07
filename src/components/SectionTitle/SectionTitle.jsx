import React from "react";
import "./SectionTitle.css";

const SectionTitle = (props) => {
  return (
    <div className="section-title">
      <p>{props.sectionTitle}</p>
    </div>
  );
};

export default SectionTitle;

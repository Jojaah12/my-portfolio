import Button from "../../components/Button/Button";
import "./Welcome.css";
const Welcome = () => {
  return (
    <section className="section">
      <div className="welcome-text">
        <p>
          Hi, <span className="text-span">It's David. </span>
          I'm a front-end developer
        </p>
      </div>
      <Button
        /* url="#profile"
        icon={faAngleDoubleRight} */
        divStyle={{
          paddingTop: "40px",
        }}
        className="button"
        text="View my work"
      />
    </section>
  );
};

export default Welcome;

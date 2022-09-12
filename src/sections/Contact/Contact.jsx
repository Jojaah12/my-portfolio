import ContactForm from "../../components/ContactForm/ContactForm";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <SectionTitle sectionTitle="contact" lineColor="#fff" />
      <p style={{ color: "#4f5656", paddingBottom: "10px" }}>Get In Touch</p>
      <ContactForm />
    </section>
  );
};

export default Contact;

import "./Contact.css";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Contact() {
  return (
    <main className="outer-contact-container">
      <h2>Contact Us</h2>
      <div className="middle-content-container">
        <div className="contact-info">
          <h2>Mail</h2>
          <p>
            We are here to help and answer any questions you might have. we are
            looking forward to hearing from you.
          </p>
          <div className="inner-contact-info">
            <p>
              <MdOutlineModeOfTravel /> J. Shartavas 42, Tbilissi, Georgia
            </p>
            <p>
              <FaPhoneFlip /> +995 591941921
            </p>
            <p>
              <IoMail /> <a>lazariashvilidato@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="gap">
          <h1>OR</h1>
        </div>
        <form className="inner-contact-container">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Jhon" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input
              type="email"
              placeholder="JhonWick@example.com"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              type="message"
              placeholder="Text Message"
              name="message"
            />
          </div>
          <button>submit</button>
        </form>
      </div>
    </main>
  );
}

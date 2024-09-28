import "./Contact.css";

export default function Contact() {
  return (
    <main className="outer-contact-container">
      <h2>Contact Us</h2>
      <form className="inner-contact-container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Jhon" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="email" placeholder="JhonWick@example.com" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea type="message" placeholder="Text Message" name="message" />
        </div>
        <button>submit</button>
      </form>
    </main>
  );
}

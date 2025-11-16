import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Contact</h2>
          <div className="contact-divider"></div>
        </div>

        <ul className="contact-list" aria-label="Contact information">
          <li className="contact-item">
            <span className="contact-label">Email</span>
            <a className="contact-value" href="mailto:joseph27choi@gmail.com">joseph27choi@gmail.com</a>
          </li>

          <li className="contact-item">
            <span className="contact-label">Location</span>
            <span className="contact-value">Waterloo, Ontario, Canada</span>
          </li>

          <li className="contact-item">
            <span className="contact-label">GitHub</span>
            <a className="contact-value" href="https://github.com/joseph27choi" target="_blank" rel="noopener noreferrer">github.com/joseph27choi</a>
          </li>

          <li className="contact-item">
            <span className="contact-label">LinkedIn</span>
            <a className="contact-value" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;

import '../styles/Contact.css'

function Contact() {
    return (
      <section className="contact-section">
        <div className="contact-title">
          <h1>Contact Me</h1>
        </div>

        <form action="https://formspree.io/f/mldbbkev" method="POST" className="contact-form">
          <input type="text" name="_gotcha" style={{ display:"none" }}/>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" className="button">Send Message</button>
        </form>
        <p className="seperate">- or -</p>
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:brian.engel4242@gmail.com">brian.engel4242@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+18328886076">(832) 888-6076</a></p>
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/brian-david-engel/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/brian-david-engel
          </a></p>
        </div>

        <div className="resume-download">
          <a href="/resume_brian_engel.pdf" className="resume-button" download>
            📄 Download My Resume
          </a>
        </div>
      </section>
    )
  }
  
  export default Contact
  
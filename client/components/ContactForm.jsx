import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <section className="contact_section">
        <div className="container">
          <h2>Contact</h2>
          <form
            className="contact-form"
            action="https://formspree.io/efjonsson@gmail.com"
            method="POST"
          >
            <label htmlFor="name">Name</label><input type="text" name="name" required />
            <label htmlFor="email">Email</label><input type="email" name="email" required />
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="4" cols="50" required />
            <input type="hidden" name="_subject" value="New message from your website" />
            <input className="submit" type="submit" name="submit" value="Email me" />
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;

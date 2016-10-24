import React, { Component } from 'react';
import request from 'superagent';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      body: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const key = e.target.name;
    const newState = {};
    newState[key] = e.target.value;
    this.setState(newState);
  }
  handleSubmit(e) {
    e.preventDefault();
    request.post('/api/v1/messages').send(this.state)
           .then((response) => {
             const validationNode = document.querySelector('.form-validation-message');
             if (response.status === 201) {
               validationNode.textContent = 'Your message has been sent.';
               return;
             }
             validationNode.textContent = 'There was an error sending your message. Please try again.';
             return;
           });
  }
  render() {
    return (
      <section className="contact_section container">
        <h2>Contact Erik</h2>
        <div className="contact-form-container">
          <form
            className="contact-form"
            onSubmit={this.handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="body"
              rows="4"
              cols="50"
              onChange={this.handleChange}
              value={this.state.message}
              required
            />
            <input className="submit" type="submit" name="submit" value="Email me" />
            <p className="form-validation-message">&nbsp;</p>
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;

import React, { Component } from 'react';
import request from 'superagent';

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
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
    request.post('/api/v1/contacts').send(this.state)
           .then((response) => {
             if (response.status === 200) {
               console.log('Contact created', response.body);
             }
           });
  }
  render() {
    return (
      <section className="contact_section container">
        <div className="container">
          <h2>Contact Erik</h2>
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
              name="message"
              rows="4"
              cols="50"
              onChange={this.handleChange}
              value={this.state.message}
              required
            />
            <input type="hidden" name="_subject" value="New message from your website" />
            <input className="submit" type="submit" name="submit" value="Email me" />
          </form>
        </div>
      </section>
    );
  }
}

export default ContactForm;

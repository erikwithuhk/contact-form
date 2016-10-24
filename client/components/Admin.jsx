import React, { Component } from 'react';
import request from 'superagent';
import Message from './Message.jsx';

const propTypes = {};

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
  }
  componentDidMount() {
    this.getMessages();
  }
  getMessages() {
    request.get('/api/v1/messages')
           .then(response => this.setState({ messages: response.body }))
           .catch(err => err);
  }
  renderMessageListItems() {
    return this.state.messages.map(message => (
      <Message
        key={message.id}
        id={message.id}
        sender={message.name}
        senderEmail={message.email}
        messageBody={message.body}
      />
    ));
  }
  render() {
    const messageListItems = this.renderMessageListItems();
    return (
      <div className="admin-container">
        <ul className="message-list">
          {messageListItems}
        </ul>
      </div>
    );
  }
}

Admin.propTypes = propTypes;

export default Admin;

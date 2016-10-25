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
    this.updateMessage = this.updateMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }
  componentDidMount() {
    this.getMessages();
  }
  getMessages() {
    request.get('/api/v1/messages')
           .then(response => this.setState({ messages: response.body }))
           .catch(err => err);
  }
  updateMessage({ id, name, email, body }) {
    const updatedAt = new Date(Date.now());
    const updates = { id, name, email, body, updatedAt };
    request.patch(`/api/v1/messages/${id}`).send(updates)
           .then(() => this.getMessages());
  }
  deleteMessage(id) {
    request.del(`/api/v1/messages/${id}`)
           .then(() => this.getMessages())
           .catch(err => console.error(err));
  }
  renderMessageListItems() {
    return this.state.messages.map(message => (
      <Message
        key={message.id}
        id={message.id}
        sender={message.name}
        senderEmail={message.email}
        messageBody={message.body}
        messageSent={message.createdAt}
        updateMessage={this.updateMessage}
        deleteMessage={this.deleteMessage}
      />
    ));
  }
  render() {
    const messageListItems = this.renderMessageListItems();
    return (
      <div className="admin-container">
        <h2 className="admin-header">Messages Admin</h2>
        <ul className="message-list">
          {messageListItems}
        </ul>
      </div>
    );
  }
}

Admin.propTypes = propTypes;

export default Admin;

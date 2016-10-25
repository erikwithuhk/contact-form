import React, { Component } from 'react';
import { Icon } from 'react-fa';
import MessageDetails from './MessageDetails.jsx';
import MessageUpdateForm from './MessageUpdateForm.jsx';

const propTypes = {
  id: React.PropTypes.number,
  sender: React.PropTypes.string,
  senderEmail: React.PropTypes.string,
  messageBody: React.PropTypes.string,
  messageSent: React.PropTypes.string,
  updateMessage: React.PropTypes.func,
  deleteMessage: React.PropTypes.func,
};

class Message extends Component {
  constructor() {
    super();
    this.state = {
      updating: false,
    };
    this.toggleUpdating = this.toggleUpdating.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  getDateString() {
    const timestamp = new Date(Date.parse(this.props.messageSent));
    const month = timestamp.getMonth() + 1;
    const day = timestamp.getDate();
    const year = timestamp.getFullYear();
    return `${month}/${day}/${year}`;
  }
  getTimeString() {
    const timestamp = new Date(Date.parse(this.props.messageSent));
    const hours = timestamp.getHours() - 4;
    const minutes = timestamp.getMinutes();
    return minutes < 10 ? `${hours}:0${minutes}` : `${hours}:${minutes}`;
  }
  getMessageDetails() {
    if (this.state.updating === true) {
      return (
        <MessageUpdateForm
          id={this.props.id}
          sender={this.props.sender}
          senderEmail={this.props.senderEmail}
          dateString={this.getDateString()}
          timeString={this.getTimeString()}
          messageBody={this.props.messageBody}
          handleUpdate={this.handleUpdate}
        />
      );
    }
    return (
      <MessageDetails
        sender={this.props.sender}
        senderEmail={this.props.senderEmail}
        dateString={this.getDateString()}
        timeString={this.getTimeString()}
        messageBody={this.props.messageBody}
        toggleUpdating={this.toggleUpdating}
        deleteMessage={this.props.deleteMessage}
      />
    );
  }
  toggleUpdating() {
    if (this.state.updating) {
      this.setState({ updating: false });
    } else {
      this.setState({ updating: true });
    }
  }
  handleUpdate({ sender, senderEmail, messageBody }) {
    this.toggleUpdating();
    const updates = {
      id: this.props.id,
      name: sender,
      email: senderEmail,
      body: messageBody,
    };
    this.props.updateMessage(updates);
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteMessage(this.props.id);
  }
  render() {
    const messageDetails = this.getMessageDetails();
    return (
      <li className="message-list-item">
        {messageDetails}
      </li>
    );
  }
}

Message.propTypes = propTypes;

export default Message;

import React, { Component } from 'react';
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
  }
  getDateString() {
    const timestamp = new Date(parseInt(this.props.messageSent, 10));
    const month = timestamp.getMonth() + 1;
    const day = timestamp.getDate();
    const year = timestamp.getFullYear();
    return `${month}/${day}/${year}`;
  }
  getTimeString() {
    const timestamp = new Date(parseInt(this.props.messageSent, 10));
    const hours = timestamp.getHours();
    let convertedHours;
    let ampm;
    if (hours > 12) {
      convertedHours = hours - 12;
      ampm = 'pm';
    } else {
      convertedHours = hours;
      ampm = 'am';
    }
    const minutes = timestamp.getMinutes();
    return minutes < 10 ? `${convertedHours}:0${minutes}${ampm}` : `${convertedHours}:${minutes}${ampm}`;
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
        id={this.props.id}
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

import React, { Component } from 'react';

const propTypes = {
  id: React.PropTypes.number,
  sender: React.PropTypes.string,
  senderEmail: React.PropTypes.string,
  messageBody: React.PropTypes.string,
  messageSent: React.PropTypes.string,
};

class Message extends Component {
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
  render() {
    const dateString = this.getDateString();
    const timeString = this.getTimeString();
    return (
      <li className="message-list-item">
        <h3 className="message-sender">{this.props.sender}</h3>
        <p className="message-sender-email">{this.props.senderEmail}</p>
        <p className="message-body">{this.props.messageBody}</p>
        <p className="message-date-sent">{dateString}</p>
        <p className="message-time-sent">{timeString}</p>
      </li>
    );
  }
}

Message.propTypes = propTypes;

export default Message;

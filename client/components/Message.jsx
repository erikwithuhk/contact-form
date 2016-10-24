import React, { Component } from 'react';
import { Icon } from 'react-fa';

const propTypes = {
  id: React.PropTypes.number,
  sender: React.PropTypes.string,
  senderEmail: React.PropTypes.string,
  messageBody: React.PropTypes.string,
  messageSent: React.PropTypes.string,
  deleteMessage: React.PropTypes.func,
};

class Message extends Component {
  constructor() {
    super();
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
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteMessage(this.props.id);
  }
  render() {
    const dateString = this.getDateString();
    const timeString = this.getTimeString();
    return (
      <li className="message-list-item">
        <a className="message-sender" href={`mailto:${this.props.senderEmail}`} >
          {this.props.sender}
        </a>
        <p className="message-date-sent">
          <Icon name="calendar" className="sent-icon" /> {dateString}
        </p>
        <p className="message-time-sent">
          <Icon name="clock-o" className="sent-icon" /> {timeString}
        </p>
        <p className="message-body">{this.props.messageBody}</p>
        <button className="message-buttons update-button" onClick={this.handleUpdate}>
          <Icon name="pencil-square-o" /> Update
        </button>
        <button className="message-buttons delete-button" onClick={this.handleDelete}>
          <Icon name="trash-o" /> Delete
        </button>
      </li>
    );
  }
}

Message.propTypes = propTypes;

export default Message;

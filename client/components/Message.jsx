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
          sender={this.props.sender}
          senderEmail={this.props.senderEmail}
          dateString={this.getDateString()}
          timeString={this.getTimeString()}
          messageBody={this.props.messageBody}
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
  handleUpdate(e) {
    e.preventDefault();
    this.toggleUpdating();
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
        <button className="message-buttons update-button" onClick={this.handleUpdate}>
          <Icon name="pencil-square-o" /> {this.state.updating ? 'Save' : 'Update'}
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

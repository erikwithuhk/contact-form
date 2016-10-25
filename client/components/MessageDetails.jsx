import React, { Component } from 'react';
import { Icon } from 'react-fa';

const propTypes = {
  id: React.PropTypes.number,
  sender: React.PropTypes.string,
  senderEmail: React.PropTypes.string,
  dateString: React.PropTypes.string,
  timeString: React.PropTypes.string,
  messageBody: React.PropTypes.string,
  toggleUpdating: React.PropTypes.func,
  deleteMessage: React.PropTypes.func,
};

class MessageDetails extends Component {
  constructor() {
    super();
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props.toggleUpdating();
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.deleteMessage(this.props.id);
  }
  render() {
    return (
      <div>
        <a className="message-sender" href={`mailto:${this.props.senderEmail}`} >
          {this.props.sender}
        </a>
        <p className="message-date-sent">
          <Icon name="calendar" className="sent-icon" /> {this.props.dateString}
        </p>
        <p className="message-time-sent">
          <Icon name="clock-o" className="sent-icon" /> {this.props.timeString}
        </p>
        <p className="message-body">{this.props.messageBody}</p>
        <button className="message-buttons update-button" onClick={this.handleUpdate}>
          <Icon name="pencil-square-o" /> Update
        </button>
        <button className="message-buttons delete-button" onClick={this.handleDelete}>
          <Icon name="trash-o" /> Delete
        </button>
      </div>
    );
  }
}

MessageDetails.propTypes = propTypes;

export default MessageDetails;

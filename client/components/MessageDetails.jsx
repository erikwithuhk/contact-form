import React, { Component } from 'react';
import { Icon } from 'react-fa';

const propTypes = {
  sender: React.PropTypes.string,
  senderEmail: React.PropTypes.string,
  dateString: React.PropTypes.string,
  timeString: React.PropTypes.string,
  messageBody: React.PropTypes.string,
};

class MessageDetails extends Component {
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
      </div>
    );
  }
}

MessageDetails.propTypes = propTypes;

export default MessageDetails;

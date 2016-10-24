import React, { Component } from 'react';
import { Icon } from 'react-fa';

const propTypes = {
  sender: React.PropTypes.string,
  senderEmail: React.PropTypes.string,
  messageBody: React.PropTypes.string,
};

class MessageUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: this.props.sender,
      senderEmail: this.props.senderEmail,
      messageBody: this.props.messageBody,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const key = e.target.name;
    const newState = {};
    newState[key] = e.target.value;
    this.setState(newState);
  }
  render() {
    return (
      <div className="update-form">
        <label htmlFor="sender" >Name</label>
        <input
          name="sender"
          className="message-sender-input"
          onChange={this.handleChange}
          value={this.state.sender}
        />
        <label htmlFor="senderEmail" >Email</label>
        <input
          name="senderEmail"
          className="message-email-input"
          onChange={this.handleChange}
          value={this.state.senderEmail}
        />
        <label htmlFor="messageBody">Message</label>
        <textarea
          name="messageBody"
          className="message-body-input"
          onChange={this.handleChange}
          value={this.state.messageBody}
        />
      </div>
    );
  }
}

MessageUpdateForm.propTypes = propTypes;

export default MessageUpdateForm;

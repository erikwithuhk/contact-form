import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element,
};

class App extends Component {
  render() {
    return (
      <div className="app-container">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;

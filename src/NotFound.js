import React, { Component } from 'react';


class NotFound extends Component {
  render() {
    return (
      <div className="App">
        Page not found
           <button onClick={() => this.props.history.push('/')}>Go to Home</button>
      </div>
    );
  }
}

export default NotFound;

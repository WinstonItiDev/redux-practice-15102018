import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1>Redux Practice Exercise 17/10/2018</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
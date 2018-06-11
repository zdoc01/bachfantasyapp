import React, { Component } from 'react';
import { func, string } from 'prop-types';
import { Link } from 'react-router-dom';

// TODO: refactor
class RightNav extends Component {
  renderReturningUserNav() {
    return (
      <ul className="right-nav">
        <li>Welcome, {this.props.username}!</li>
        <li>
          <Link to="/" onClick={this.props.onLogout}>
            Logout
          </Link>
        </li>
      </ul>
    );
  }

  /* eslint-disable-next-line class-methods-use-this */
  renderNewUserNav() {
    return (
      <ul className="right-nav">
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );
  }

  render() {
    return this.props.username
      ? this.renderReturningUserNav()
      : this.renderNewUserNav();
  }
}

RightNav.propTypes = {
  username: string,
  onLogout: func.isRequired,
};

RightNav.defaultProps = {
  username: '',
};

export default RightNav;

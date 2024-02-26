import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
  render() {
    const { isAuthenticated, username, name } = this.props;

    if (!isAuthenticated) {
      return (<p>Engin notandi innskráður</p>);
    }

    return (
      <p>Innskráning: {name} ({username})</p>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  username: state.auth.user ? state.auth.user.username : '',
  name: state.auth.user ? state.auth.user.name : '',
});

export default connect(mapStateToProps)(User);

import React, { Component } from 'react';
import logo from './logo.svg';
import User from './User';
import './Main.css';

import { connect } from 'react-redux';
import { createSetUserAction } from '../redux/actions';

import { get } from '../backend';

const THREE_SECONDS = 3000;

class App extends Component {
  componentDidMount() {
    const { setUser } = this.props;
    get('/user').then(async (res) => {
      setTimeout(
        () => setUser(res.data),
        THREE_SECONDS);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <User />
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => {
    dispatch(createSetUserAction(user));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
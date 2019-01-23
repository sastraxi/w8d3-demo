import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { get } from './backend';

class App extends Component {

  state = { data: null };

  componentDidMount() {
    get('/').then(res => 
      this.setState({
        data: res.data,
      }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            From the backend: <b>{ this.state.data }</b>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

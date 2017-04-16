import React, { Component } from 'react';

import './App.scss';

class App extends Component {

  componentWillMount() {
    console.log('hello');
  }

  render () {
    return (
      <div class="app">
        <h1 class="title">Hellow World!!@@</h1>
      </div>
    )
  }
}

export default App;

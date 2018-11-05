import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MasonryGallery from './components/masonry-gallery.js';

class App extends Component {
  
  //  ES6 method of initializing
  // state = {

  // }
  
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleCount = this.handleCount.bind(this);
  }

  handleCount() {
    this.setState({ 
      counter: this.state.counter + 1,
      color: 'red'
    })
  }

  testFunction() {
    console.log('I function!');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.testFunction}>Click me!</button>
        <button onClick={this.handleCount}>Count me!</button>
        <span>{this.state.counter}</span>
        <MasonryGallery />
      </div>
    );
  }
}

export default App;

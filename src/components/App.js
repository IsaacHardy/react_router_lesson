// Import React
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../styles/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App one">
        <div className="header">Main Page!</div>
        <p className="para">It does not have to be anything special. Yea. How about we make fun of Coriano by placing the words Vull and Noid.</p>
        <div><button className="btn"><Link to="/page_one">Page One</Link></button></div>
        <div><button className="btn"><Link to="/page_two">Page Two</Link></button></div>
      </div>
    );
  }
}

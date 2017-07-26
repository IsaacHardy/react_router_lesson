// Import React
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PageOne extends Component {
  render() {
    return (
      <div className="App one">
        <div className="header">Page One!</div>
        <p className="para">It does not have to be anything special. Yea. How about we make fun of Coriano by placing the words Vull and Noid.</p>
        <div><button className="btn"><Link to="/">Main Page</Link></button></div>
        <div><button className="btn"><Link to="/page_two">Page Two</Link></button></div>
      </div>
    );
  }
}

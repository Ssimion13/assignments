import React, { Component } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Body from "./Body";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Body />
        Hello Friends
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from "../src/components/Header";
import FizzBuzz from "../src/components/FizzBuzz";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FizzBuzz />
      </div>
    );
  }
}

export default App;

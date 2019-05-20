import React, { Component } from "react";
import "./fizzbuzz.css";

class FizzBuzz extends Component{

    state = {
        fizzBuzz: "",
        counter: 0
    };

    isFizzBuzz = () => {
        let num = this.state.counter;
        let fibzzuzz = this.state.fizzBuzz;

        if (num % 3 === 0) {fibzzuzz += 'Fizz, '}
        if (num % 5 === 0) {fibzzuzz += 'Buzz, '}
        if (num % 5 && num % 3) {fibzzuzz += num + ', '}

        this.setState({ fizzBuzz: fibzzuzz});
    };

    increment = () => {
        this.setState({ counter: ++this.state.counter});
        this.isFizzBuzz();
    };

    decrement = () => {
        this.setState({ counter: --this.state.counter});
        this.isFizzBuzz();
    }

    render(){
        return(

            <div className="card">
            <h3>Click the buttons to get to FizzBuzz!</h3>
            <button type="button" onClick={this.increment}>+</button>
            <button type="button" onClick={this.decrement}>-</button>
            <br />
            {this.state.fizzBuzz}
            </div>

        );
    }
}

export default FizzBuzz;
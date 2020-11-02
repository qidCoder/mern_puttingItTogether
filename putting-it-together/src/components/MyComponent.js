import React, { Component } from 'react';

class MyComponent extends Component {
    //add in a state variable to create a birthday button that will increase one person's age by one
    constructor(props){
        super(props);
        this.state={
            increment_age: this.props.age,
            clickTimes: []//if we want to keep track of the dates when the button is clicked. Empty array at first
        };
    }

    //adding in a method to handle the button event to reduce lines of code below
    handleClick = (event) => {
        this.setState({
            increment_age: this.state.increment_age + 1,
            clickTimes: [...this.state.clickTimes, new Date()]//this is saying to add a new array and add into it all the existing dates (using the spread operator...) and then after that add in the new date. Not using push or appending because that would be changing the state
        });
    };


    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>

                <p>Age: {this.state.increment_age}</p>
                <p>Hair Color: {this.props.hairColor}</p>

                <button onClick={this.handleClick}>
                    Add 1 year to Age {this.state.increment_age}
                </button>

                {/* add the render of the date */}
                <ul>
                    {this.state.clickTimes.map((date, i) => {
                        return <li key={i}>{date.toString()}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default MyComponent;
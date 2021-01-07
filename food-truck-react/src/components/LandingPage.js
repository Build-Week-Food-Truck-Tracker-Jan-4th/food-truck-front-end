import React from "react";

export default class LandingPage extends React.Component {

  handleClick = (role) => {
    window.location.href = `/${role}-login`;
  }

  render() {
    return (
      <div>
        <h1>Food Truck Tracker</h1>
        <p>Welcome to Food Truck Tracker! Click the button to login.</p>
        <button onClick={() => this.handleClick("diner")}>Diner</button>
        <button onClick={() => this.handleClick("operator")}>Operator</button>
        
      </div>
    )
  }
}
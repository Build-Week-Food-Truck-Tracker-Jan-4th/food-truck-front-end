import React from "react";
import { Link } from "react-router-dom";

export default class LandingPage extends React.Component {

  handleClick = () => {
    window.location.href = "/login";
  }

  render() {
    return (
      <div>
        <h1>Food Truck Tracker</h1>
        <p>Welcome to Food Truck Tracker! Click the button to Log in.</p>
        <button onClick={this.handleClick}>Log in!</button>
        <p>Don't have an account? <Link to="/sign-up">Sign up here</Link></p>
      </div>
    )
  }
}
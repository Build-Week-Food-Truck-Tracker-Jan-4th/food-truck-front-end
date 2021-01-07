import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../auth/axiosWithAuth";

export default class SignUpForm extends React.Component {
  state = {
    role: null,
    userName: "",
    password: "",
    email: "",
    location: {
      latitude: "",
      longitude: "",
      distortion: "",
    },
    favoriteTrucks: [],
    trucksOwned: [],
    isMissingRole: false,
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === "latitude" || name === "longitude" || name === "distortion") {
      this.setState({ location: { ...this.state.location, [name]: value } });
    } else if (name === "role") {
      this.setState({ isMissingRole: false });
      this.setState({ [name]: value });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.role === "diner") {
      const dinerState = {
        username: this.state.userName,
        email: this.state.email,
        password: this.state.password,
        location: "Cave Town, USA",
      };

      axiosWithAuth()
        .post("auth/register/diners", dinerState)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      window.location.href = "/login";
    } else if (this.state.role === "operator") {
      const operatorState = {
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
      };
      //console.log(operatorState);
      //Post request
      window.location.href = "/login";
    } else {
      this.setState({ isMissingRole: true });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h4>Role</h4>
            <div className="role">
              <label>
                Diner
                <input
                  type="radio"
                  value="diner"
                  checked={this.state.role === "diner"}
                  name="role"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Operator
                <input
                  type="radio"
                  value="operator"
                  checked={this.state.role === "operator"}
                  name="role"
                  onChange={this.handleChange}
                />
              </label>
              {this.state.isMissingRole && (
                <div>Oops! You forgot to choose a role!</div>
              )}
            </div>
          </label>
          <label>
            Username
            <input
              type="text"
              value={this.state.userName}
              name="userName"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email
            <input
              type="text"
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            />
          </label>
          {this.state.role === "diner" && (
            <div>
              <h4>Location</h4>
              <label>
                Latitude
                <input
                  type="text"
                  value={this.state.location.latitude}
                  name="latitude"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Longitude
                <input
                  type="text"
                  value={this.state.location.longitude}
                  name="longitude"
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Distortion
                <input
                  type="text"
                  value={this.state.location.distortion}
                  name="distortion"
                  onChange={this.handleChange}
                />
              </label>
            </div>
          )}
          <button>Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Log in here</Link>
        </p>
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";
import './style.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    axios
      .post(
        "http://localhost:8000/login",
        JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      )
      .then(response => {
        if (response.data.status) {
          this.props.history.push("/home");
        } else {
          this.setState({ error: response.data.message });
        }
      });
  }

  render() {
    return (
      <div>
        <center>
          <h1 className="login">Login</h1>
          <h3 style={{ color: "red" }}>{this.state.error}</h3>
        </center>
        <table border="0" align="center" width="500">
          <tr>
            <td  className="details" align="right">Email : </td>
            <td align="left">
              <input className="typearea"
                type="text"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </td>
          </tr>
          <tr>
            <td className="details" align="right">Password :</td>
            <td align="left">
              <input className="typearea"
                type="password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td align="left">
              <button className="button" onClick={this.handleSubmit}>Login</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Login;

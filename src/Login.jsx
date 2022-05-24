import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="col-lg-9">
        <h4 className="border-bottom border-solid m-1 p-2"> Login</h4>

        <div className="form-group form-row m-1 p-1">
          <label htmlFor="" className="col-lg-4">
            Email:
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder=""
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
              console.log(this.state.email);
            }}
          />
        </div>

        <div className="form-group form-row m-1 p-1">
          <label htmlFor="password" className="col-lg-4">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder=""
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
              console.log(this.state.password);
            }}
          />
          <div className="text-end p-1">
            {this.state.message}
            <button className="btn btn-primary m-1" onClick={this.handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
  handleSubmit = () => {
    if (
      (this.state.email === "fsamura01@gmail.com") &
      (this.state.password === "Fs@mura01")
    ) {
      this.setState({
        message: <span className="text-success">Success!</span>,
      });
    } else {
      this.setState({
        message: (
          <span className="text-danger">Invalid login please try angin!</span>
        ),
      });
    }
  };
}

export default Login;

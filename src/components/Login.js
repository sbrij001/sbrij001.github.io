import React from "react";
import { withRouter } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import login from "../styles/login.scss";

// const Login = () => (
//   <div className="login" id="login">
//     <Form>
//       <label className="welcome">Welcome to Stockaid</label>
//       <Form.Field>
//       <div>
//         <label className="label">Email</label>
//       </div>
//         <input placeholder="Email" />
//       </Form.Field>
//       <Form.Field>
//       <div>
//         <label className="label">Password</label>
//         </div>
//         <input placeholder="Password" />
//       </Form.Field>
//       <Button color="orange" className="submit" type="submit">
//         Submit
//       </Button>
//     </Form>
//   </div>
// );
//export default Login;

//old form by Joshua A

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  //
  handleChange = e => {
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div className="login-page">

        <div className="form2">
          <h1>Please Login </h1>
          <form className="login-container" onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="username"
              name="username"
            />
            </div>
            <div>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="password"
              name="Password"

            />
            </div>
            <input type="submit" value="Log In" />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);

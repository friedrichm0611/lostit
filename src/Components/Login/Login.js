import { useState } from "react";
import Button from "react-bootstrap/Button";
//import { NavLink } from "react-router-dom";
import "./Login.css";
import AppContainer from "../../HOC/AppContainer";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
  });

  const onInputChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div>
      <AppContainer>
        <form className="mt-3">
          <h1>Welcome to Lost in Translation</h1>
          <p>Please login!</p>
          <div className="mt-7">
            <label
              htmlFor="username"
              className="form-label col-sm-2 col-form-label"
            >
              Username
            </label>
            <br></br>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              onChange={onInputChange}
            />
          </div>
          <br></br>

          <Button>Log in</Button>
        </form>
      </AppContainer>
    </div>
  );
};

export default Login;

import { useForm } from "react-hook-form";
import { loginUser } from "../../api/user";
import Button from "react-bootstrap/Button";
import "./Login.css";

const usernameConfig = {
  // setting some properties for the input field "username"
  required: true,
  minLength: 5,
};

const Login = () => {
  // Login handler
  const {
    // decontructing "useForm"
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ username }) => {
    // Catching the data from the form
    const [error, user] = await loginUser(username);
    console.log("Error: ", error);
    console.log("User: ", user);
  };

  const errorMessage = (() => {
    // error handling
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return <span>Username is required</span>;
    }
    if (errors.username.type === "minLength") {
      return <span>Username is too short (min. 5 chars)</span>;
    }
  })();

  return (
    // the form to get the username
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
        <h1>Welcome to Lost in Translation</h1>
        <p>Please login!</p>
        <div className="mt-7">
          <label
            htmlFor="username"
            className="form-label col-sm-2 col-form-label"
          >
            Username:
          </label>
          <br></br>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            {...register("username", usernameConfig)}
          />
          {errorMessage}
        </div>
        <br></br>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;

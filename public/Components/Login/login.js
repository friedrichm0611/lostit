const Login = () => {
  return (
    <form className="mt-3">
      <h1>Welcome to Lost in Translation</h1>
      <p>Please login</p>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
      </div>
      <input id="username" type="text" placeholder="Enter your username" />
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Username
        </label>
        <input id="password" type="text" placeholder="Enter your password" />
      </div>
    </form>
  );
};

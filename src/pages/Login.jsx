import { useState } from "react";
import "./../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    /*
    try {
      // In case API uses GET
      // const response = await fetch("http://localhost:3000/users");
      // const data = await response.json();
      // console.log(data);

      // In case API uses Post
    } catch (err) {
      console.log(err);
    }
    */
  };

  return (
    <div className="container">
      <h1>Login To The Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="InputEmail1">Email address</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="email"
            className="form-control"
            id="InputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="InputPassword1">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="InputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-margin-top">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

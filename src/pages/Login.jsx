import { useState } from "react";
import "./../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password) return;
      // Username & Password Display In Console
      console.log(username, password);
      // URL for login
      const url = "https://crm1.1point1.in/api/method/login";
      // Method = Post
      const method = "POST";
      // Headers
      const headers = {
        // prettier-ignore
        "Accept": "application/json",
        "Content-Type": "application/json",
      };
      // Converting body object to JSON string
      const body = JSON.stringify({ usr: username, pwd: password });
      // Sending post-fetch request to the server using url and options
      const response = await fetch(url, {
        method,
        headers,
        body,
      });
      // Converting response into json
      const data = await response.json();
      // Displaying data in console
      console.log(data);
    } catch (err) {
      console.log(err);
    }
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
            type="text"
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

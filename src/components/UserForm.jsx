import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "../features/userSlice";

const UserForm = () => {
  const userName = useSelector((state) => state.user.name);
  const userAge = useSelector((state) => state.user.age);
  const dispatch = useDispatch();
  const [name, setName] = useState(userName);
  const [age, setAge] = useState(userAge);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      getUserDetails({
        name,
        age,
      })
    );
  };
  return (
    <div className="container">
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
          <div className="invalid-feedback">Please enter your name.</div>
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            type="text"
            className="form-control"
            id="age"
            name="age"
            required
          />
          <div className="invalid-feedback">Please enter a valid age.</div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;

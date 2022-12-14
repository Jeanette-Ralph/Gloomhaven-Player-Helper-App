import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div className="card">
        <h1 className="card-header">Sign Up</h1>
        <div className="card-body">
          {data ? (
            <p>
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Username"
                name="username"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
              <br />
              <input
                className="form-input"
                placeholder="Email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <br />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <br />
              <button
                className="submit-button"
                style={{ cursor: "pointer" }}
                type="submit"
              >
                Submit
              </button>
            </form>
          )}

          {error && <div className="error-message">{error.message}</div>}
        </div>
      </div>
    </main>
  );
};

export default Signup;

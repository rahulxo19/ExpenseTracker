import React from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  const login = <button className="btn btn-link">Login</button>;

  return (
    <div className="aligning">
      <form className="form">
        <div className="sign-up">
          <h2>Sign Up</h2>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="email"
            id="email"
            placeholder="something"
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="something"
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="something"
          />
          <label htmlFor="password">Confirm Password</label>
        </div>
        <button className="btn btn-primary submit-button">Submit</button>
      </form>
      <div className="login">Already have an account?{login}</div>
    </div>
  );
};

export default SignUpForm;

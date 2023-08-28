import React, { useRef } from "react";
import "./SignUpForm.css";

const signUpHandler = async (email, password) => {
  try {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBOISyaNmxbrOK-2Wu6fE6PiAwH1KFw2ko";
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
    }
    if (!res.ok) {
      const data = await res.json();
      console.log(data.error.message);
    }
  } catch (err) {
    console.log(err.message);
  }
};

const SignUpForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirm = confirmRef.current.value;

    if (email.length !== 0 && password.length !== 0 && confirm.length !== 0) {
      if (password !== confirm) {
        alert("Password is not same with confirm password");
      } else {
        console.log("working correct");
        signUpHandler(email, password);
      }
    } else {
      alert("Cannot submit empty fields");
    }
  };

  const login = <button className="btn btn-link">Login</button>;

  return (
    <div className="aligning">
      <form className="form" onSubmit={formHandler}>
        <div className="sign-up">
          <h2>Sign Up</h2>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="email"
            id="email"
            ref={emailRef}
            placeholder="something"
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="password"
            id="password"
            ref={passwordRef}
            placeholder="something"
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            className="form-control"
            type="password"
            id="confirm"
            ref={confirmRef}
            placeholder="something"
          />
          <label htmlFor="confirm">Confirm Password</label>
        </div>
        <button className="btn btn-primary submit-button">Submit</button>
      </form>
      <div className="login">Already have an account?{login}</div>
    </div>
  );
};

export default SignUpForm;

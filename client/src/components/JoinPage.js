import React from "react";
import useSignUpForm from "../hooks/useSignupForm";
import useLoginForm from "../hooks/useLoginForm";
import querystring from "querystring";
import axios from "axios";
import sha1 from "sha1";
import CookieGetter from "./CookieGetter";
import Profile from "./Profile";

const JoinPage = () => {
  const registerAction = () => {
    axios
      .post("http://127.0.0.1:8000/api/users", {
        email: inputs.email,
        password: sha1(inputs.password + "wacommerce"),
      })
      .then(function (response) {
        alert(
          "Account created! You're free to join us filling the form on the left side."
        );
      })
      .catch(function (error) {
        alert("Uh oh! Something doesn't seem right.");
      });
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      email: "",
      password: "",
    },
    registerAction
  );

  const loginAction = () => {
    axios
      .post(
        "http://127.0.0.1:8000/user/login",
        querystring.stringify({
          email: loginInput.email,
          password: loginInput.password,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        if (response.data.token) {
          alert("Success! You're being redirected...");
          document.cookie = `session=${response.data.email}|${response.data.token}`;
          window.location.href = "/";
        } else {
          alert("Invalid credentials.");
        }
      })
      .catch(function (error) {
        console.log("Uh oh! Something isn't right.");
      });
  };

  const { loginInput, loginHandleChange, loginHandleSubmit } = useLoginForm(
    {
      email: "",
      password: "",
    },
    loginAction
  );

  if (CookieGetter("session").split("|")[1] === undefined) {
    return (
      <div className="cf pa5-l">
        <div className="fl w-100 w-50-ns tc br">
          <div className="pa4 black-80">
            <form className="measure center" onSubmit={loginHandleSubmit}>
              <fieldset id="sign_in" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">
                  Already with us? Sign in here!
                </legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100"
                    type="email"
                    name="email"
                    id="email-signin"
                    onChange={loginHandleChange}
                    value={loginInput.email}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="password"
                    name="password"
                    id="password-signin"
                    onChange={loginHandleChange}
                    value={loginInput.password}
                  />
                </div>
                <label className="pa0 ma0 lh-copy f6 pointer">
                  {/* <input type="checkbox" /> Remember me */}
                </label>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in!"
                />
              </div>
              <div className="lh-copy mt3">
                <a href="#0" className="f6 link dim black db">
                  Forgot your password?
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="fl w-100 w-50-ns tc">
          <div className="pa4 black-80">
            <form onSubmit={handleSubmit} className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">
                  Not with us yet? Don't waste time!
                </legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="email"
                    name="email"
                    id="email-signup"
                    onChange={handleInputChange}
                    value={inputs.email}
                    required
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="password"
                    name="password"
                    id="password-signup"
                    onChange={handleInputChange}
                    value={inputs.password}
                    required
                  />
                </div>
                <label className="pa0 ma0 lh-copy f6 pointer"></label>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign up!"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return <Profile />;
  }
};

export default JoinPage;

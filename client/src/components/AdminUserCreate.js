import React from "react";
import useSignUpForm from "../hooks/useSignupForm";
import useLoginForm from "../hooks/useLoginForm";
import querystring from "querystring";
import axios from "axios";
import sha1 from "sha1";

const AdminUserCreate = () => {
  const registerAction = () => {
    axios
      .post("http://127.0.0.1:8000/api/users", {
        email: inputs.email,
        password: sha1(inputs.password + "wacommerce"),
      })
      .then(function (response) {
        alert("User successfully created.");
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

  return (
    <div className="fl w-100 tc">
      <div className="pa4 black-80">
        <form onSubmit={handleSubmit} className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">admin {">"} create user</legend>
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
          <div></div>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Create"
            />
          </div>
          <a href="/admin" className="no-underline black">
            <div className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
              Return to panel
            </div>
          </a>
        </form>
      </div>
    </div>
  );
};

export default AdminUserCreate;

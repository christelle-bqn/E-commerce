import React from "react";
import useSignUpForm from "../hooks/useSignupForm";
import axios from "axios";

const AdminProductCreate = () => {
  const registerAction = () => {
    axios
      .post("http://127.0.0.1:8000/api/products", {
        idCategory: parseInt(inputs.idCategory),
        title: inputs.title,
        price: inputs.price,
        photo: inputs.photo,
        date: inputs.date,
        quantity: parseInt(inputs.quantity),
        weight: parseInt(inputs.weight),
        status: "new" ? true : false,
        description: inputs.description,
      })
      .then(function (response) {
        alert("Product successfully created.");
      })
      .catch(function (error) {
        alert("Uh oh! Something doesn't seem right.");
        console.log(error.response.request);
      });
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      idCategory: "",
      title: "",
      price: "",
      photo: "",
      date: "",
      quantity: "",
      weight: "",
      status: "",
      description: "",
    },
    registerAction
  );

  return (
    <div className="fl w-100 tc">
      <div className="pa4 black-80">
        <form onSubmit={handleSubmit} className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">
              admin {">"} create product
            </legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="idCategory">
                id category
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="number"
                name="idCategory"
                id="idCategory"
                onChange={handleInputChange}
                value={inputs.idCategory}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="title">
                title
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="title"
                id="title"
                onChange={handleInputChange}
                value={inputs.title}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="price">
                price
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="price"
                id="price"
                onChange={handleInputChange}
                value={inputs.price}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="photo">
                photo url
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="photo"
                id="photo"
                onChange={handleInputChange}
                value={inputs.photo}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="date">
                date
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="date"
                id="date"
                onChange={handleInputChange}
                value={inputs.date}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="quantity">
                quantity
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="number"
                name="quantity"
                id="quantity"
                onChange={handleInputChange}
                value={inputs.quantity}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="weight">
                weight
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="number"
                name="weight"
                id="weight"
                onChange={handleInputChange}
                value={inputs.weight}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="status">
                status
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="status"
                id="status"
                onChange={handleInputChange}
                value={inputs.status}
                required
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="description">
                description
              </label>
              <textarea
                className="b pa2 input-reset ba bg-transparent w-100"
                type="number"
                name="description"
                onChange={handleInputChange}
                value={inputs.description}
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

export default AdminProductCreate;

import { useState } from "react";

const useLoginForm = (initialValues, callback) => {
  const [loginInput, setInputs] = useState(initialValues);
  const loginHandleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };
  const loginHandleChange = (event) => {
    event.persist();
    setInputs((loginInput) => ({
      ...loginInput,
      [event.target.name]: event.target.value,
    }));
  };
  return {
    loginHandleSubmit,
    loginHandleChange,
    loginInput,
  };
};
export default useLoginForm;

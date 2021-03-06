import Buttons from "./Button.js";
import React from "react";
import TextInput from "./TextInput.js";
import "../css/login.css";
import { Form } from "react-bootstrap";
import { userService } from "../services/userService.js";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    userService
      .registerUser({
        email: e.target.email.value,
        password: e.target.password.value,
        name: "andy",
        address: "Mongolia",
      })
      .then((res)=> {
        res.json();
      })
      .then((res) => {
        console.log(res)
      });
    console.log(
      'Register request:',
      "Email:",
      e.target.email.value,
      "Password:",
      e.target.password.value,
      "Repeat:",
      e.target.password.value === e.target.passwordRepeat.value
    );
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="field-contianer d-flex flex-column mt-5 mb-5 align-items-center justify-content-center"
    >
      <p className="hmm fw-bold">Бүртгүүлэх</p>

      <TextInput id={'email'} type={"email"} name={"И-мэйл"} />
      <TextInput id={'password'} type={"password"} name={"Нууц үг"} />
      <TextInput id={'passwordRepeat'} type={"password"} name={"Нууц үг давтах"} />

      <div className="agreeTo d-flex justify-content-between">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" for="flexCheckDefault">
          <a href="#" className="mb-4">Үйлчилгээний нөхцөл зөвшөөрөх</a>
        </label>
      </div>

      <Buttons class={"signupTabletView"} type={"submit"} value={"Бүртгүүлэх"} />
    </Form>
  );
};

export default Register;

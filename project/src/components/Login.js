// import Buttons from "@restart/ui/esm/Button";
import React from "react";
import Buttons from "./Button.js";
import TextInput from "./TextInput.js";
import { Link } from "react-router-dom";
import "../css/login.css";
import { Form } from "react-bootstrap";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Login request:",
      "Email:",
      e.target.email.value,
      "Password:",
      e.target.password.value
    );
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="field-contianer d-flex flex-column mt-5 mb-5 align-items-center justify-content-center"
    >
      <p className="col-6 hmm fw-bold ms-2 ">нэвтрэх</p>

      <TextInput id="email" type={"email"} name={"И-мэйл"} />
      <TextInput id="password" type={"password"} name={"Нууц үг"} />

      <a className="forgotPass mb-4" href="#">
        Нууц үгээ мартсан уу.
      </a>

      <Buttons class={"loginTabletView"} type={"submit"} name={"login"} />

      <p className="underline">эсвэл</p>

      <Link to={"/register"} className="registerButton">
        <Buttons
          className="registerButton"
          class={"loginTabletView"}
          type="submit"
          name={"register"}
        />
      </Link>
    </Form>
  );
};

export default Login;

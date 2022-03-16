// import Buttons from "@restart/ui/esm/Button";
import React from "react";
import Buttons from "./Button.js";
import TextInput from "./TextInput.js";
import { Link, useHistory } from "react-router-dom";
import "../css/login.css";
import { Form } from "react-bootstrap";
import { userService } from "../services/userService.js";
import { useUser } from "../contexts/UserContext.js";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    userService
      .loginUser({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
      .then((res)=> {
        return res.json();
      })
      .then((data) => {
        console.log(data.success)
        if(data.success) {
          userService.storeUserInfo(data);
          setUser({
            userName: data.data.name,
            email: data.data.email,
            address: data.data.address,
          })
          history.push("/")
        } else {
          alert("Failed to login")
        }
      });
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

      <Buttons class={"loginTabletView"} type={"submit"} value={"login"} />

      <p className="underline">эсвэл</p>

      <Link to={"/register"} className="registerButton">
        <Buttons
          className="registerButton"
          class={"loginTabletView"}
          type="submit"
          value={"register"}
        />
      </Link>
    </Form>
  );
};

export default Login;

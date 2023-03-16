import React from "react";
import { WrapperStyled } from "./styled";

export default function Welcome() {
  const Login = () => {
    window.location.href = "http://localhost:3000/login";
  };
  const Registration = () => {
    window.location.href = "http://localhost:3000/registration";
  };
  return (
    <WrapperStyled>
      <div className="container">
        <div className="container__box">
          <span className="welcome__img">
            <img src="/image/logo.jpg" alt="" />
          </span>
          <div className="btn">
            <button className="login__btn" onClick={Login}>
              Đăng Nhập
            </button>
            <button className="Registration" onClick={Registration}>
              Đăng Ký
            </button>
          </div>
        </div>
      </div>
    </WrapperStyled>
  );
}

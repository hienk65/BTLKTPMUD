import React from "react";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  .container{
      height:900px;
      background: url(https://tiemchungcovid19.moh.gov.vn/Content/v2/images/BG_new1.jpg);
      background-repeat: no-repeat;
  }
  .welcome__img{
      margin: 10px;
      width:50%;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .container__box{
    max-width: 100%;
    margin-left: 63%;
    padding: 16px;
    transform: translateY(10%);
    background-color: white;
    width: 450px;
    height: 30vw;
    border-radius: 20px;
  }
  .btn{
    position: relative;
    top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .login__btn{
      width: 200px;
      height: 50px;
      margin: 0 0 30px 0px;
      outline: none;
      background-color: rgb(109 214 156);
     border: 1px solid transparent;
     cursor: pointer;

  }
  .Registration{
    width: 200px;
    height: 50px;
    outline: none;
    background-color:rgb(214 211 109);
    border: 1px solid transparent;
    cursor: pointer;
  }
`;

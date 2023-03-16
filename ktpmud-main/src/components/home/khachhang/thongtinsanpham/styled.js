import React from "react";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  .body {
    display: flex;
    flex-wrap: wrap;
  }
  .list__products{
    list-style-type: none;
  }
  .card {
    border-radius: 20px;
    width: 40%;
  }
  .title__Sp{
    text-align:center;
    margin-bottom: 20px;
    font-size: 40px;
  }
  .buy__product{
    height: 45px;
    width: 30%;
    border-radius: 10px;
    color: #fff;
    background-color: #1b2a49;
    font-size: 15px;
    font-weight:400;
    margin: 20px 0;
  }
  .buy__product:hover{
    transform: scale(1.1);
    font-size: 500;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  }
  .title{
    font-size: 24px;
    font-weight: 400;
    color: #3a327f;
  }
  .card {
    margin: 30px 3.16667% 30px 3.16667%;
    border-radius: 20px;
    width: 27%;
    box-shadow: 0 0.4rem 0.6rem 0 rgb(0 0 0 / 20%);
  }
  .content {
    /* background-color: blue; */
    width : 100%;
    height : 100%;
    display: flex;
    flex-direction:column;
    .content-left{
      width : 100%;
      img{
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        width: 100%;
        height: auto;
      }
    }
    .content-right{
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      margin: 0 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

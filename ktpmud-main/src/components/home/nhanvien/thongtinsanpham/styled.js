import React from "react";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  ul{
    list-style-type: none;
  }
  
  .modal-background{
    background-color: red;
  }
  .ant-modal-wrap{
    background-color: red;
  }
  .product-contant{
    background-color:#fff;
  }
  .product-tittle{
    text-align: center;
    font-size: 35px;
    color:#038ff1;
    margin:30px 0 20px 0;
  }
  .title{
    font-size:20px;
    color: blue;
  }
  .list-product{
    padding-left: 32px;
  }
  .product-edit{
    display: flex;
    align-items: center;
    height: 40px;
    justify-content: center;
    border-radius: 7px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 25px;
  }
  .product-edit:hover{
    transform: scale(1.1);
  }
  .body {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
  }
  .card {
    margin: 30px 3.16667% 30px 3.16667%;
    border-radius: 20px;
    width: 27%;
    box-shadow: 0 0.3rem 0.5rem 0 rgb(0 0 0 / 20%);
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
      width : 100%;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
`;

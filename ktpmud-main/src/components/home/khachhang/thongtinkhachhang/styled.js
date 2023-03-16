import React from "react";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  .container {
    height: 100%;
  }
  .list__profile {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 20px 124px;
  }
  .item__profile {
    list-style: none;
    margin: 10px;
    padding: 10px;
    border: 2px solid #ccc;
    font-size: 1.6rem;
  }
  .list__profileK {
    display: flex;
    flex-direction: column;
    margin: 20px auto 5px;
    box-sizing: content-box;
    min-height: calc(100vh - 59px);
    list-style: none;
  }
  .profile__img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
    width: 100%;
    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
    .user-name {
      font-size: 2rem;
      font-weight: bold;
    }
  }
  .edit-Profile {
    margin: 10px;
  }
  .edit__img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    position: absolute;
    right: 43%;
    top: 230px;
    font-size: 2.2rem;
    height: 50px;
    border-radius: 50%;
    background-color: #ccc;
    cursor: pointer;
  }
`;

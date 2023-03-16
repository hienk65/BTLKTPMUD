import React from "react";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  nav {
    display: flex;
    background:#4ca0fb;
    color: white;
    height: 54px;
  }

  .nav-logo {
    display: block;
    width: 20%;
    text-align: center;
    color: blue;
    margin-top: 0;
  }

  .nav-contain {
    width: 100%;
    display: flex;
  }

  .nav-content {
    text-align: center;
    margin: auto;
  }

  .nav-links {
    display:flex;
    text-decoration-line: none;
    color : white;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
  }

  .nav-links:hover{
    transform: scale(1.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }
`;

import React from "react";
import styled from "styled-components";

export const WrapperStyled = styled.div`
  nav {
    height: 54px;
    background-color: #1b2a49;
    color: white;
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
    display: block;
    text-decoration-line: none;
    color : white;
    font-size: 16px;
    font-weight: 500;
  }

  .nav-links:hover{
    transform: scale(1.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
  }
`;

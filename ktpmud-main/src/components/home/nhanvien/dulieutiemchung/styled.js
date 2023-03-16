import React from "react";
import styled from "styled-components";

export const WrapperStyled = styled.div`
    .data-title{
        text-align: center;
        font-size: 30px;
        font-style: italic;
        margin: 30px 0;
    }
    .data-wrap{
        display: flex;
        flex-wrap: wrap;

    }
    .data-list{
        list-style-type: none ;
        padding: 15px 0 15px 13px;
    }
    .card{
        width: 20%;
        margin: 20px 2.5%;
        box-shadow: 0 0.4rem 0.7rem 0 rgb(0 0 0 / 20%);
        border-radius:10px;
        
    }
    .card:hover{
        transform: scale(1.05);
        transition: all ease-in 0.5s;
    }

    .data-button{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px ;
        border-radius: 5px;
    }
`;

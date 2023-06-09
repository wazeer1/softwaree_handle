import React from "react";
import styled from "styled-components";

const SearchBox = () => {
    return (
        <Cover>
        <input type="text" placeholder="Search...."/>
        <i class="ri-search-line"></i>
        </Cover>
    );
};

export default SearchBox;

const Cover = styled.div`
    width: 200px;
    background: red;
    height: 35px;
    border-radius: 20px;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    padding: 7px;
    input{
        width:100%;
        color:var(--primary-text-color);
    }
    color: var(--primary-text-color);
`;

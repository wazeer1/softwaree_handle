import React, { useState } from "react";
import styled from "styled-components";

const InputPassword = ({margin}) => {
    const [show,setShow] = useState(false)
    return (
        <Cover margin={margin}>
            <input type={show ? "text" : "password"} placeholder="Enter your password" />
            <div onClick={()=>setShow((prev)=>!prev)}>{show ? <i class="ri-eye-off-line"></i> : <i class="ri-eye-line"></i>}</div>
        </Cover>
    );
};

export default InputPassword;
const Cover = styled.div`
    width: 100%;
    height: 35px;
    background: #363e4c;
    border: 1px solid #424c5c;
    display:flex;
    margin-bottom:${({margin})=>margin};
    input {
        width: 88%;
        height: 100%;
        padding: 5px;
        color: #96a4ab;
    }
    div{
        width:12%;
        background:#313944;
        border: 1px solid #424c5c;
        display:flex;
        align-items:center;
        justify-content:center;
        color:#96a4ab;
    }
`;

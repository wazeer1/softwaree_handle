import React from 'react'
import styled from 'styled-components'

const InputBox = ({margin}) => {
  return (
    <Cover margin={margin}>
        <input type='text' placeholder="Enter your username or email"/>
    </Cover>
  )
}

export default InputBox

const Cover = styled.div`
    width:100%;
    height:35px;
    background:#363e4c;
    border:1px solid #424c5c;
    margin-bottom:${({margin})=>margin};
    input{
        width:100%;
        height:100%;
        padding:5px;
        color:#96a4ab;
    }
`;
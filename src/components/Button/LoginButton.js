import React from 'react'
import styled from 'styled-components'

const LoginButton = ({children,...props}) => {
  return (
    <Cover {...props}>{children}</Cover>
  )
}

export default LoginButton
const Cover = styled.button`
    width:100%;
    height:35px;
    background:#71b6f9;
    display:flex;
    align-items:center;
    justify-content:center;
    color:#fff;
    border-radius:3px;
    margin-top:20px;
    cursor:pointer;
    font-size:16px;
`;
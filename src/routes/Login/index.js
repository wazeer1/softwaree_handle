import React from 'react'
import styled from 'styled-components'
import Bg from '../../assets/bg.jpg'
import InputBox from '../../components/InputBox'
import InputPassword from '../../components/InputPassword'
import { LoginButton } from '../../components/Button'
import { useUserStore } from '../../context/store'

const Login = () => {
    const handleLogin = useUserStore((state)=>state.handleLogin)
    console.log(handleLogin);
  return (
    <Cover Bg={Bg}>
        <Container>
            <Top>
                <h3>SIGN IN</h3>
            </Top>
            <Bottom>
                <InputBox margin="20px"/>
                <InputPassword margin="20px"/>
                <input type="checkbox" name="remember"/><label for="remember">Remeber Me</label>
                <LoginButton onClick={()=>handleLogin()}>Log In</LoginButton>
            </Bottom>
        </Container>
        <p><i class="ri-git-repository-private-fill"></i>Forgot password</p>
    </Cover>
  )
}

export default Login

const Cover = styled.div`
    height:100vh;
    background-image:url(${({Bg})=>Bg});
    display:flex;
    flex-direction: column;
    gap:20px;
    align-items:center;
    justify-content:center;
    p{
        color:var(--muted-text);
        cursor:pointer;
    }
`;
const Container = styled.div`
    width:30%;
    padding:20px;
    border-radius:5px;
    background:var(--primary-color);
`;
const Top = styled.div`
    h3{
        font-size:26px;
        color:#fff;
        text-align:center;
    }
`;
const Bottom = styled.div`
    padding:30px;
    label{
        color:var(--muted-text);
        margin-left:5px;
    }
`;
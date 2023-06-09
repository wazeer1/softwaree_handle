import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SearchBox from "../SearchBox";
import { Avatar } from "../../assets";

const Header = () => {
    return (
        <>
            <Cover>
                <Left>
                    <Heading>DashBoard</Heading>
                </Left>
                <Right>
                    <SearchBox />
                    <NotificationIcon>
                        <i class="ri-notification-fill"></i>
                        <span>9</span>
                    </NotificationIcon>
                    <ProfileSect>
                        <ProfileRound>
                            <img src={Avatar}/>
                        </ProfileRound>
                        <h4>WAZEER</h4>
                        <i class="ri-arrow-drop-down-line"></i>
                        </ProfileSect>
                        <i class="ri-settings-4-line"></i>
                </Right>
            </Cover>
            <Outlet />
        </>
    );
};

export default Header;

const Cover = styled.div`
    width: 100%;
    height: 60px;
    // background:red;
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div``;
const Heading = styled.h4`
    font-size: 20px;
    color: var(--primary-text-color);
`;
const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    i{
        color:var(--primary-text-color);
        font-size:24px;
    }
`;
const NotificationIcon = styled.div`
    position: relative;
    span {
        position: absolute;
        padding: 5px;
        top: -5px;
        right: -5px;
        background: red;
        width: 15px;
        height: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 9px;
        border-radius: 50%;
        color: #fff;
        font-weight: 600;
    }
    i {
        color: var(--primary-text-color);
        font-size: 22px;
    }
`;
const ProfileSect = styled.div`
    display:flex;
    align-items:center;
    gap:3px;
    i{
        color:var(--primary-text-color);
        font-size:22px;
    }
    h4{
        color:var(--primary-text-color);
    }
    
`;
const ProfileRound = styled.div`
    width:50px;
    height:50px;
    border:2px solid var(--primary-text-color);
    border-radius:50%;
    padding:5px;
    img{
        width:100%;
        height:100%;
        border-radius:50%;
    }
`;
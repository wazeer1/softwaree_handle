import React from "react";
import styled from "styled-components";
import { Avatar } from "../../assets";

const SideBar = () => {
    return (
        <Cover>
            <Top>
                <AvatarRound>
                    <img src={Avatar} />
                </AvatarRound>
                <h4>WAZEER AHMED</h4>
                <h6>React Developer</h6>
                <SettingsDiv>
                    <i class="ri-edit-line"></i>
                    <i class="ri-settings-5-fill setting"></i>
                </SettingsDiv>
            </Top>
            <Bottom>
                <ul>
                    <li>
                        <i class="ri-dashboard-line"></i>Dashboard
                    </li>
                    <li>
                    <i class="ri-calendar-2-line"></i>Calendar
                    </li>
                    <li>
                    <i class="ri-message-2-line"></i>Chat
                    </li>
                    <li>
                    <i class="ri-mail-line"></i>Email
                    </li>
                    <li>
                    <i class="ri-list-check-3"></i>Task
                    </li>
                    <li>
                    <i class="ri-projector-line"></i>Projects
                    </li>
                </ul>
            </Bottom>
        </Cover>
    );
};

export default SideBar;

const Cover = styled.div`
    width: 250px;
    height: 100vh;
    background: #fff;
    padding: 100px 20px;
`;
const Top = styled.div`
    text-align: center;
    h6 {
        font-size: 14px;
        color: #adb5bd;
    }
`;
const AvatarRound = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    padding: 5px;
    overflow: hidden;
    border: 2px solid #adb5bd;
    margin: 0 auto;
    margin-bottom: 15px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
`;
const SettingsDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    i {
        cursor: pointer;
        &.setting {
            color: #71b6f9;
        }
    }
`;
const Bottom = styled.div`
    padding-top: 20px;
    ul {
        list-style: none;
        li {
            padding:15px 0px;
            display: flex;
            gap: 8px;
            font-size: 18px;

            align-items: center;
            i {
                font-size: 18px;
            }
        }
    }
`;

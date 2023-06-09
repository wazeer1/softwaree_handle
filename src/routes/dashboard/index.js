import React from "react";
import { Header, SideBar } from "../../components/includes";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Statistics from "../Statistics";

const Dashboard = () => {
    return (
        <Cover>
            <SideBar />
            <MainDashboard>
                <Routes>
                    <Route path="/" element={<Header/>}>
                        <Route path="/" element={<Statistics/>}/>
                    </Route>
                </Routes>
            </MainDashboard>
        </Cover>
    );
};

export default Dashboard;

const Cover = styled.div`
    display: flex;
`;
const MainDashboard = styled.div`
    width:calc(100vw - 250px);
    height:100vh;
    background:#282e38;
`;
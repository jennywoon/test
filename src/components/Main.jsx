import React from "react";
import styled from "styled-components";
import MainPost from "./MainPost";
import MainRecommend from "./MainRecommend";

const Main = () => {
    return (
        <MainContainer>
            <MainPost />
            <MainRecommend />
        </MainContainer>
    )
}

export default Main;

const MainContainer = styled.div`
    align-items: center;
    border: 1px solid rgb(219,219,219);
    width: 45%;
    height: 100%;
    margin: auto;
    /* position: absolute; */
    display: flex;
`
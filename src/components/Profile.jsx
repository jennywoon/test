import React from "react";
import styled from "styled-components";
import ProfileEdit from "./ProfileEdit";
import ProfilePostList from "./ProfilePostList";

const Profile = () => {
    return (
        < ProfileContainer >
            <ProfileEdit/>
            <ProfilePostList/>
        </ProfileContainer >
    )
}

export default Profile;

const ProfileContainer = styled.div`
    align-items: center;
    /* border: 1px solid rgb(219,219,219); */
    /* width: 45%; */
    width: 970px;
    height: 100%;
    margin: auto;
    /* position: absolute; */
    display: flex;
    flex-direction: column;
`
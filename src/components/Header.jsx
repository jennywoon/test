import React from "react";
import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { IoPaperPlaneOutline, IoCompassOutline } from "react-icons/io5";
import { TbSquarePlus } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import instagram from "../assets/instagram.png"
import { useNavigate } from "react-router-dom";
import test2 from "../assets/test2.jpg"

const Header = () => {

    const navigate = useNavigate();

    return (
        <Navbar>
            <NavbarContainer>
                <Logo
                onClick={() => {
                    navigate("/")
                }}
                />
                <StInput
                placeholder="검색"
                ></StInput>
                <NavbarIcons>
                    <MdHome size = "30" style={{cursor: "pointer"}}/>
                    <IoPaperPlaneOutline size = "28"/>
                    <TbSquarePlus size = "31"/>
                    <IoCompassOutline size = "30"/>
                    <AiOutlineHeart size = "30"/>
                    <UserImage
                        onClick={() => {
                            navigate("/mypage")
                        }}
                        style={{cursor: "pointer"}}
                        //src={props.user_profile}
                    />
                </NavbarIcons>
            </NavbarContainer>
        </Navbar>
    )
}

export default Header;

const Navbar = styled.div`
    border: 1px solid #dbdbdb;
    width: 100vw;
    height: 60px;
    /* position: fixed; */
    /* z-index: 3; */
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`
const NavbarContainer = styled.div`
    width: 100%;
    max-width: 950px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* z-index: 10; */
`
const Logo = styled.div`
    background-image: url(${instagram});
    min-width: 150px;
    min-height: 60px;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`
const StInput = styled.input`
    background-color: rgb(239,239,239);
    display: flex;
    flex-direction: column;
    font-size: 16px;
    padding: 0 10px 0 16px;
    border-radius: 8px;
    border: none;
    height: 36px;
    width: 268px;
`
const NavbarIcons = styled.div`
    display: flex;
    /* flex-direction: row;
    align-items: center;
    justify-content: space-between; */
    gap: 20px;
    /* cursor: pointer; */
`

const UserImage = styled.image`
    width: 26px;
    height: 26px;
    border-radius: 50px;
    border: 1px solid black;
    background-image: url(${test2});
    background-position: center;
    background-size: 100% 100%;
`
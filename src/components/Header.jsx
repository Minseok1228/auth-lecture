import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { authActionCreators } from "../redux/slices/auth.slice";

function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const profile = useSelector((state) => state.auth.profile);
  const dispatch = useDispatch();
  const handleClicLogOut = () => {
    const logoutAction = authActionCreators.logOut();
    dispatch(logoutAction);
  };
  return (
    <Wrapper>
      <Logo to="/">인증 연습하기</Logo>
      <Controls>
        {isLoggedIn ? (
          <>
            {profile.avatar && <Avatar src={profile.avatar} alt="아바타" />}
            <small>{profile.nickname}</small>
            <button onClick={handleClicLogOut}>로그아웃</button>
          </>
        ) : (
          <>
            <Link to="/log-in">로그인 </Link>
            <Link to="/sign-up">회원가입 </Link>
          </>
        )}
      </Controls>
    </Wrapper>
  );
}

export default Header;
const Wrapper = styled.header`
  height: 60px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;
const Logo = styled(Link)`
  //기본적으로 styled. html요소지만 리액트라우터의 Link쓸때는 ()안에 넣어서가능
  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  color: black !important;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import authAPI from "../api/auth.api";
import { authActionCreators } from "../redux/slices/auth.slice";

function PrivateRoutesLayout() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    //async안되면 then으로 가능
    //로그인을 한 상태가 맞다면,

    if (isLoggedIn) {
      const accessToken = localStorage.getItem("accessToken");
      authAPI.setToken(accessToken);
      authAPI.getProfile().then((response) => {
        const data = response.data;
        console.log(data);
        //프로필을 불러다가 프로필을 스토어에 저장!
        const payload = {
          id: data.id,
          nickname: data.nickname,
          avatar: data.avatar,
        };
        const setProfileAction = authActionCreators.setProfile(payload); //액션크리에이터로 액션생성
        dispatch(setProfileAction);
      });
    }
  }, [isLoggedIn]);
  if (!isLoggedIn) return <Navigate to="/log-in" replace />;
  return <Outlet />;
}

export default PrivateRoutesLayout;

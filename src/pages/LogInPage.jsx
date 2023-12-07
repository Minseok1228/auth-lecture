import React, { useState } from "react";
import Page from "../components/Page";
import { useDispatch } from "react-redux";
import { authActionCreators } from "../redux/slices/auth.slice";
import authAPI from "../api/auth.api";

function LogInPage() {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleClickLogin = async () => {
    if (!id || !password) return alert("ID와 PW을 제대로 써라");
    const response = await authAPI.login({ id, password });
    const data = response.data;
    const paload = {
      id: data.userId,
      nickname: data.nickname,
      avatar: data.avatar,
    };
    const loginAction = authActionCreators.logIn(paload);
    dispatch(loginAction);
  };
  return (
    <Page title="로그인">
      <input
        placeholder="ID를 입력해주세요."
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        placeholder="PW를 입력해주세요."
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClickLogin}>로그인하기</button>
    </Page>
  );
}

export default LogInPage;

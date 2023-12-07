import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      {/**헤더 */}
      <Header />
      {/** 페이지*/}
      <Outlet />
    </>
  );
}

export default DefaultLayout;

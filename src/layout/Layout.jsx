import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="text-zinc-50 bg-zinc-700 w-full min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;

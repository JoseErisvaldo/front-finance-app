import React from "react";
import MiniDrawer from "./side-bar/side-bar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <MiniDrawer>
      <Outlet />
    </MiniDrawer>
  );
};

export default MainLayout;

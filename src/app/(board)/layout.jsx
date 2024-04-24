import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import React from "react";

const BoardLayout = ({children}) => {
  return (
    <div>
      <div className="w-[17%] mr-[2%] float-left">
        <SidebarComponent link="/todo-board"></SidebarComponent>
      </div>
      <div className="w-[79%] float-left">
        <NavbarComponent></NavbarComponent>
        {children}
      </div>
    </div>
  );
};

export default BoardLayout;

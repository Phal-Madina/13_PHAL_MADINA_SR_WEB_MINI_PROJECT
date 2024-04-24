import React from "react";

import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import { getAllTask } from "@/service/task.service";
import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import TodoListComponent from "@/components/TodoListComponent";
import Link from "next/link";
import Image from "next/image";

const TodoListPage = async () => {
  return (
    <div className=" w-[100%] h-[600px] overflow-hidden flex justify-center items-center">
        <img src={'https://sofontsy.com/cdn/shop/products/welcome-cutting-file-for-farmhouse-sign-welcome-sign-greeting-sign-svg-dxf-and-more-glowforge-laser-ready-svg-diva-watts-designs-306122_1024x.jpg?v=1617077597'}
        />
    </div>
  );
};
export default TodoListPage;

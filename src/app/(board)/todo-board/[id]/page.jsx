import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import { getAllTaskByStatusAndWorkSpace, getWorkSpaceById } from "@/service/workspace.service";
import React from "react";

const page = async ({ params }) => {
  const workSpaceName = await getWorkSpaceById(params.id);
  const todo = await getAllTaskByStatusAndWorkSpace(1,params.id);
  const workingOn = await getAllTaskByStatusAndWorkSpace(2,params.id);
  const checking = await getAllTaskByStatusAndWorkSpace(3,params.id);
  const complete = await getAllTaskByStatusAndWorkSpace(4,params.id);
  return (
    <div>
      <div className="mt-[27px]">
        <ListBoardComponentHeader
          workSpaceName={workSpaceName.data}
          workSpaceId={params.id}
        ></ListBoardComponentHeader>
      </div>
      <div className="w-[100%] h-screen flex justify-between mt-[18px] font-bold">
        <div className="w-[24%] h-auto">
          <div>
            TODO
            <div className="bg-yellow-200 mt-[10px] h-[2.5px]"></div>
          </div>
          <TodoCardComponent task={todo} color={"todo"}></TodoCardComponent>
        </div>
        <div className="w-[24%] h-auto">
          <div>
            WORKING ON
            <div className="bg-blue-400 mt-[10px] h-[2.5px]"></div>
          </div>
          <TodoCardComponent task={workingOn} color={"workingOn"}></TodoCardComponent>
        </div>
        <div className="w-[24%] h-auto">
          <div>
            CHECKING
            <div className="bg-yellow-500 mt-[10px] h-[2.5px]"></div>
          </div>
          <TodoCardComponent task={checking} color={"checking"}></TodoCardComponent>
        </div>
        <div className="w-[24%] h-auto">
          <div>
            COMPLETED
            <div className="bg-green-400 mt-[10px] h-[2.5px]"></div>
          </div>
          <TodoCardComponent task={complete} color={"completed"}></TodoCardComponent>
        </div>
      </div>
      <AddNewTaskComponent workSpaceId={params.id}/>
    </div>
  );
};

export default page;


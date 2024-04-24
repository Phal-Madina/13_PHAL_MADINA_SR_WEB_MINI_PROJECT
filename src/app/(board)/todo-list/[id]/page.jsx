import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import TodoListComponent from "@/components/TodoListComponent";
import { getAllTask } from "@/service/task.service";
import { getWorkSpaceById } from "@/service/workspace.service";
import React from "react";

const listPage = async ({ params }) => {
  const color_todo = "todo";
  const color_working = "workingOn";
  const color_checking = "checking";
  const color_complete = "completed";

  const task = await getAllTask(params.id); 
  const workSpaceName = await getWorkSpaceById(params.id);
  return (
    <div>
      <div className="mt-[27px]">
        <div className="w-[65%] float-left">
          <ListBoardComponentHeader
            workSpaceName={workSpaceName.data}
            workSpaceId={params.id}
          ></ListBoardComponentHeader>
          {task?.data?.map((j) =>
            j.status === 1 ? (
              <TodoListComponent taskData={j} color={color_todo} />
            ) : j.status === 2 ? (
              <TodoListComponent taskData={j} color={color_working} />
            ) : j.status === 3 ? (
              <TodoListComponent taskData={j} color={color_checking} />
            ) : j.status === 4 ? (
              <TodoListComponent taskData={j} color={color_complete} />
            ) : (
              ""
            )
          )}
        </div>
        <div className="w-[28%] float-left ml-[40px]">
          <MonthlyStatisticsComponent></MonthlyStatisticsComponent>
        </div>
      </div>
      <AddNewTaskComponent workSpaceId={params.id}/>
    </div>
  );
};

export default listPage;

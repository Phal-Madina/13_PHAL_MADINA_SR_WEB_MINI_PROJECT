import React from "react";

const TodoListComponent = ({ taskData, color }) => {
  console.log("Task PRop :",taskData.data);
  return (
    <div>
      <div
        className={
          `w-[100%] h-[100px] mt-[20px] rounded-[10px] relative bg-` + [color]
        }
      >
        <div className="h-[80px] w-[80px] bg-white absolute left-[10px] top-[50%] translate-y-[-50%] rounded-xl text-center leading-8">
          <p className="mt-[5px] text-[18px]">Mon</p>
          <span className="font-bold text-[34px] text-red-500">18</span>
        </div>
        <div className="w-[340px] h-[80px] absolute left-[120px] top-[50%] translate-y-[-50%] rounded-xl">
          <h3 className="font-bold text-[20px] mt-[5px]">Header</h3>
          <p className="text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, nesciunt.
          </p>
        </div>
        <button className="w-[100px] h-[40px] bg-white rounded-2xl absolute right-[20px] top-[50%]">
          {taskData.status === 1
            ? "Todo"
            : taskData.status === 2
            ? "Working On"
            : taskData.status === 3
            ? "Checking"
            : taskData.status === 4
            ? "Complete"
            : ""}
        </button>
      </div>
    </div>
  );
};

export default TodoListComponent;

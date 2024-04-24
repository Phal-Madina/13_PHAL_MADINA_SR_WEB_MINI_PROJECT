import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";

export default function TodoCardComponent({task,color}) {
  return task?.data?.map(e => (
    
    <div className="border border-gray rounded-lg w-[100%] mt-5 relative">
      <div className="p-5">
        <div className="flex justify-between">
          <p>{e.title}</p>
          <div className="absolute top-2 right-3">
            {/* <Image
              src={"/assets/icons/tabler_dots.svg"}
              width={20}
              height={20}
              alt={"edit delete card"}
            /> */}
            <EditDeleteDropDownComponent />
          </div>
        </div>

        <p className="text-gray">{e.description}</p>
        <div className="flex justify-between items-center mt-5">
          <div className="bg-bgTag text-colorTag py-1 px-5 rounded-lg font-bold">
            Development
          </div>
          <div className={`rounded-full w-5 h-5 bg-`+[color]}></div>
        </div>
      </div>

      <hr className="text-gray" />
      <div className="flex gap-2 justify-end pr-3 py-2 relative">
      <i className="fa-solid fa-calendar-plus absolute left-[15px] top-[50%] translate-y-[-50%]"></i>
        <Image
          src={"/assets/icons/calendar.svg"}
          width={20}
          height={20}
          alt="calendar icon"
        />
        <p className="text-gray">{e.dueDate}</p>
      </div>
    </div>
  ));
}

'use client'
import { addFavorite } from "@/action/workSpaceAction";
import Image from "next/image";
import React from "react";

export default function ListBoardComponentHeader({workSpaceId,workSpaceName}) {
  return (
    <>
      <div className="text-gray flex text-lg gap-3 mb-5">
        <p>Workspace</p> / <p>{workSpaceName.workspaceName}</p> / <p>List</p>
      </div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{workSpaceName.workspaceName}</h2>
        <div className="border border-gray rounded-lg p-2">
          <button onClick={()=>addFavorite(workSpaceId)}>
            <Image
              src="/assets/icons/star.svg"
              width={20}
              height={20}
              alt="black star"
            />
          </button>
        </div>
      </div>
    </>
  );
}

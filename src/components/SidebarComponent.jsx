import Image from "next/image";
import React from "react";
import Link from "next/link";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import { getAllWorkSpaceService } from "@/service/workspace.service";

export default async function SidebarComponent({link}) {
  const workspace = await getAllWorkSpaceService();
  return (
    <div className="pl-10 mt-6 h-screen">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-[80px]">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
      {workspace.data.map((i) =>
        !i.isFavorite ? (
          <div className="flex items-center mt-5 w-full relative" key={i.workSpaceId}>
            <div className="rounded-full w-4 h-4 bg-todo"></div>
            <Link href={`/todo-list/${i.workSpaceId}`}>
              <div className="flex justify-between w-full pl-3">
                <p>{i.workspaceName}</p>
              </div>
            </Link>
            <EditDeleteDropDownComponent workspaceId={i.workSpaceId} />
          </div>
        ) : (
          ""
        )
      )}

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      {/* each favorite workspace */}
      {workspace.data.map((i) =>
        i.isFavorite ? (
          <div className="flex items-center mt-5 w-full" key={i.workspaceId}>
            <div className="rounded-full w-4 h-4 bg-workingOn"></div>
            <div className="flex justify-between w-full pl-3">
              <p>{i.workspaceName}</p>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
}

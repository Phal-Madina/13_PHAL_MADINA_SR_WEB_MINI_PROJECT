import { headerToken } from "@/app/api/headerToken";
import next from "next";
import { revalidateTag } from "next/cache";

export const getAllWorkSpaceService = async() =>{
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/workspaces`, {
        next : {tages : ['WorkSpace']},
        cache :"no-store",
        headers: header
    });
    const data = await res.json();
    return data;
};
export const getWorkSpaceById = async(workId) => {
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/workspace/445`, {
        cache: "no-store",
        headers: header
    });
    const data = await res.json();
    return data;
};
export const insertWorkSpace = async (workspace) =>{
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/workspaces`, {
        method : "POST",
        body : JSON.stringify(workspace),
        headers: header
    });
    revalidateTag('WorkSpace');
    const data = await res.json();
    return data;
};
// export const updateWorkSpace = async(req, workId) =>{
//     const header = await headerToken();
//     const res = await fetch(``, {
//         cache: "no-store",
//         headers: header
//     });
//     const data = await res.json;
//     return data;
// };
export const deleteWorkSpace = async(workId) =>{
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/workspaces/${workId}`,
    {
        method : "DELETE",
        headers : header
    }        
    )
    revalidateTag('WorkSpace');
}

export const addWorkSpaceToFavorite = async (workspaceId,favoriteWorkSpace) => {
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/workspaces/add-to-favorite/${workspaceId}`,{
        method : "PUT",
        body : JSON.stringify(favoriteWorkSpace),
        headers : header
    })
    const data = await res.json();
    revalidateTag('WorkSpace');
    return data;
}

export const getAllTaskByStatusAndWorkSpace = async (status,workSpace) => {
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks/getTaskByStatusAndWorkspaceId/${status}/${workSpace}`,{       
        cache : "no-store",
        headers : header
    });
    const data = await res.json()
    return data;
}
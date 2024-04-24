import { headerToken } from "@/app/api/headerToken";
import { revalidateTag } from "next/cache";

export const insertTask = async(taskData) =>{
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks
    `, {
        method : "POST",
        body : JSON.stringify(taskData),
        headers: header
    });
    const data = await res.json();
    revalidateTag('task')
    return data;
}

export const getAllTask = async (id) =>{
    const header = await headerToken();
    const res = await fetch(`http://110.74.194.123:8989/api/todo/v1/tasks?workspaceId=${id}`, {
        next: {tags:['task']},
        cache: "no-store",
        headers: header
    });
    const data = await res.json();
    return data;
}
"use server"

import { insertTask } from "@/service/task.service"

export const taskAction = async (taskData) => {
    const task = {
        taskTitle: taskData.get('title'),
        description: taskData.get('description'),
        startDate: new Date(),
        dueDate: taskData.get('dueDate'),
        tag: taskData.get('tag'),
        status: 1,
        workspaceId: taskData.get('workSpaceId')
    }
    await insertTask(task);
}

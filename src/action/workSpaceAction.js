"use server"

import { addWorkSpaceToFavorite, deleteWorkSpace, insertWorkSpace } from "@/service/workspace.service";

export const workspacesAction = async (workspacesData) => {
  const workspaces = {
    workspaceName: workspacesData.get('workspaceName')
  }
  await insertWorkSpace(workspaces);
}

export const deleteWorkSpaceAction = async (workspaceId) => {
  await deleteWorkSpace(workspaceId);
}

export const addFavorite = async (workspaceId) => {
  const favoriteWorkSpace = {
    isFavorite : true 
  }
  await addWorkSpaceToFavorite(workspaceId,favoriteWorkSpace)
}
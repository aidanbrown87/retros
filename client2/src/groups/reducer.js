import { getNextId } from "../postIts/idGenerator";

export const addGroup = author => {
  return {
    type: "ADD_NEW_GROUP",
    author
  };
};

export const createGroup = (id1, id2, xPos = 0, yPos = 0) => {
  return {
    type: "CREATE_GROUP",
    id1,
    id2,
    xPos,
    yPos
  };
};

export const updateGroupPosition = (id, xPos, yPos) => {
  return {
    type: "UPDATE_GROUP_POSITION",
    id,
    xPos,
    yPos
  };
};

export const addPostItToGroup = (id, postItId) => {
  return {
    type: "ADD_POSTIT_TO_GROUP",
    id,
    postItId
  };
};

export const editGroupName = (id, name) => {
  return {
    type: "EDIT_GROUP_NAME",
    id,
    name
  };
};

export default function(state = {}, action) {
  switch (action.type) {
    case "UPDATE_GROUP_POSITION":
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          xPos: action.xPos,
          yPos: action.yPos
        }
      };
    case "ADD_NEW_GROUP":
      const idNew = getNextId();
      return {
        ...state,
        [idNew]: { id: idNew, xPos: 0, yPos: 0, postIts: [] }
      };
    case "CREATE_GROUP":
      const id = getNextId();
      const { id1, id2, xPos, yPos } = action;
      return {
        ...state,
        [id]: { id, xPos, yPos, postIts: [id1, id2] }
      };
    case "ADD_POSTIT_TO_GROUP":
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          postIts: [...state[action.id].postIts, action.postItId]
        }
      };
    case "EDIT_GROUP_NAME":
      return {
        ...state,
        [action.id]: { ...state[action.id], name: action.name }
      };
    default:
      return state;
  }
}

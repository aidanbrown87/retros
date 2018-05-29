import { getNextId } from "./idGenerator";

export const addPostIt = (author) => {
  return {
    type: 'ADD_NEW',
    author
  }
}

export const updatePostIt = (id, text) => {
  return {
    type: 'UPDATE_POSTIT',
    id,
    text
  }
}

export default function(state = {}, action) {
  switch (action.type) {
    case 'ADD_POSTIT':
      console.log("addpostiit");
      return [
        ...state,
        {id: action.id, text: action.text, xPos: 0, yPos: 0}
      ]
    // case 'UPDATE_POSITION':
    //   return {
    //     ...state,
    //     [action.id]: {...state[action.id], xPos: action.xPos, yPos: action.yPos}
    //   }

    // case 'ADD_BOARD':
    //   return action.board.postIts

    case 'ADD_NEW':
      console.log("addnew");
      const id = getNextId()
      return {
        ...state,
        [id]: {id, text: "", xPos: 0, yPos: 0, isEditing: true, author: action.author}
      }

    // case 'EDIT_POSTIT':
    //   console.log('editpostit');
    //   return {
    //     ...state,
    //     [action.id]: {...state[action.id], isEditing: true}
    //   }

    case 'UPDATE_POSTIT':
      console.log('updatepostit');
      return {
        ...state,
        [action.id]: {...state[action.id], text: action.text}
      }

    // case 'FINISH_EDIT':
    //   console.log('finish edit');
    //   return {
    //     ...state,
    //     [action.id]: {...state[action.id], isEditing: false}
    //   }

    default:
      return state
  }
}
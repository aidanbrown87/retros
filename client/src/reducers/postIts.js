const postIts = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POSTIT':
      console.log("addpostiit");
      return [
        ...state,
        {id: action.id, text: action.text, xPos: 0, yPos: 0}
      ]
    case 'UPDATE_POSITION':
      return state.map(item => item.id === action.id ? {...item, xPos: action.xPos, yPos: action.yPos} : item)

    case 'ADD_BOARD':
      return action.board.postIts

    case 'ADD_NEW':
    console.log("addnew");
    return {
      ...state,
      [action.id]: {id: action.id, text: "", xPos: 0, yPos: 0, isEditing: true}
    }

    case 'EDIT_POSTIT':
    console.log('editpostit');
    return {
      ...state,
      [action.id]: {...state[action.id], isEditing: true}
    }

    case 'UPDATE_POSTIT':
      console.log('updatepostit');
      return {
        ...state,
        [action.id]: {...state[action.id], text: action.text}
      }

    case 'FINISH_EDIT':
    console.log('finish edit');
    return {
      ...state,
      [action.id]: {...state[action.id], isEditing: false}
    }

    default:
    console.log("default reducer", state);
      return state
  }
}

export default postIts

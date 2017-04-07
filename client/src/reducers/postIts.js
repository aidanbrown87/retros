const postIts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POSTIT':
      return [
        ...state,
        {id: action.id, text: action.text, xPos: 0, yPos: 0}
      ]
    case 'UPDATE_POSITION':
      return state.map(item => item.id === action.id ? {...item, xPos: action.xPos, yPos: action.yPos} : item)

    case 'ADD_BOARD':
      return action.board.postIts
    default:
      return state
  }
}

export default postIts

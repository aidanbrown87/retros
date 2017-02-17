const postIts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POSTIT':
      return [
        ...state,
        {id: action.id, text: action.text, xPos: 0, yPos: 0}
      ]
    case 'UPDATE_POSITION':
      return state.map(item => item.id == action.id ? this.returnTheItem(item, action) : item)

    default:
      return state
  }
}

const returnTheItem = (item, action) => return {...item, action.xPos, action.yPos};

export default postIts

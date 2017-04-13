let nextPostItId = 0
export const addPostIt = (text) => {
  return {
    type: 'ADD_POSTIT',
    id: nextPostItId++,
    text
  }
}

export const updatePosition = (id, xPos, yPos) => {
  return {
    type: 'UPDATE_POSITION',
    id,
    xPos,
    yPos
  }
}

export const sendPostIt = (text) => {
  return {
    type: 'server/addPostIt',
    data: text
  }
}

export const addBoard = (board) => {
  return {
    type: 'ADD_BOARD',
    board
  }
}

export const addNewPostIt = (id) => {
  return {
    type: 'ADD_NEW',
    id
  }
}

export const editPostIt = (id) => {
  return {
    type: 'EDIT_POSTIT',
    id
  }
}

let nextPostItId = 0
export const addPostIt = () => {
  return {
    type: 'ADD_NEW',
    id: nextPostItId++,
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

export const sendPostIt = () => {
  return {
    type: 'server/addPostIt'
  }
}

export const sendNewPostIt = () => {
  return {
    type: 'server/addNewPostIt'
  }
}

export const sendEditPostIt = (id, text) => {
  return {
    type: 'server/editPostIt',
    id,
    text
  }
}

export const sendFinishEdit = (id) => {
  return {
    type: 'server/finishEdit',
    id,
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

export const updatePostIt = (id, text) => {
  return {
    type: 'UPDATE_POSTIT',
    id,
    text
  }
}

export const finishEdit = (id) => {
  return {
    type: 'FINISH_EDIT',
    id
  }
}

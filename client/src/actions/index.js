let nextPostItId = 0
export const addPostIt = (author) => {
  return {
    type: 'ADD_NEW',
    id: nextPostItId++,
    author
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

export const sendPostIt = (author) => {
  return {
    type: 'server/addPostIt',
    author
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

export const sendPositionUpdate = (id, xPos, yPos) => {
  return {
    type: 'server/updatePosition',
    id,
    xPos,
    yPos
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

export const addUsername = (username) => {
  return {
    type: 'ADD_USERNAME',
    username
  }
}

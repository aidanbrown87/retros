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

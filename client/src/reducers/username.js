const username = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USERNAME":
      return { username: action.username}
    default:
      return state

  }
}

export  default username

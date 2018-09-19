export const setPostItSize = size => ({ type: "SETSIZE", size });

export default function(state = { postItSize: "small" }, action) {
  switch (action.type) {
    case "SETSIZE":
      return {
        ...state,
        postItSize: action.size
      };
    default:
      return state;
  }
}

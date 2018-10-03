import reducer, { addGroup, addPostItToGroup, createGroup, removePostIt } from "./reducer";

jest.mock("../postIts/idGenerator.js");
import { getNextId } from "../postIts/idGenerator";

const newGroupState = {
  id: 0,
  xPos: 0,
  yPos: 0,
  postIts: []
};

const initialState = {
  a: { id: "a", xPos: 600, yPos: 400, postIts: ["1", "2"], name: 'a' },
  b: { id: "b", xPos: 0, yPos: 0, postIts: ["3", "4"], name: 'b' }
};

it("adds a group with postIts to an empty state ", () => {
  getNextId.mockImplementation(() => "a");
  const newState = reducer({}, createGroup("1", "2", 100, 200));
  expect(newState).toEqual({
    a: {
      id: "a",
      xPos: 100,
      yPos: 200,
      postIts: ["1", "2"]
    }
  });
});

it("adds a post it to an existing group", () => {
  getNextId.mockImplementation(() => 42);
  const newState = reducer(initialState, addPostItToGroup("a", "postItID"));
  expect(newState).toEqual({
    ...initialState,
    a: {
      ...initialState["a"],
      postIts: [...initialState["a"].postIts, "postItID"]
    }
  });
});

it("removes a postIt from an existing goup", () => {
  const newState = reducer(initialState, removePostIt("b", "3"));
  expect(newState).toEqual({
    ...initialState,
    b: {
      ...initialState["b"],
      postIts: ['4']
    }
  })
})

it('')

// it("updates a post it", () => {
//   const newText = "new Text";
//   const newState = reducer(initialState, updatePostIt(1, newText));
//   expect(newState[1]).toEqual({
//     ...initialState[1],
//     text: newText,
//   });
// });

// it("updates the position", () => {
//   const newState = reducer(initialState, updatePosition(1, 200, 300));
//   expect(newState[1]).toEqual({
//     ...initialState[1],
//     xPos: 200,
//     yPos: 300,
//   })
// })

// it("updates the colour", () => {
//   const newState = reducer(initialState, updateColour(1, "red"));
//   expect(newState[1]).toEqual({
//     ...initialState[1],
//     colour: "red"
//   })
// })

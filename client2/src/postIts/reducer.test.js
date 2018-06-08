import reducer, { addPostIt, updatePostIt, updatePosition, updateColour } from "./reducer";

jest.mock("./idGenerator.js");
import { getNextId } from "./idGenerator";

const newPostItState = {
  id: 0,
  text: "",
  xPos: 0,
  yPos: 0,
  isEditing: true,
  author: ""
};

const initialState = {
  0: { ...newPostItState, id: 0, text: "test post", author: "testAuthor" },
  1: { ...newPostItState, id: 1, author: "anotherAuthor" }
};

it("adds a post it to an empty state ", () => {
  const postItAuthor = "Author123";
  getNextId.mockImplementation(() => 0);
  const newState = reducer({}, addPostIt(postItAuthor));
  expect(newState).toEqual({
    0: { ...newPostItState, author: postItAuthor }
  });
});

it("adds a post it to an existing state", () => {
  const postItAuthor = "newAuthor";
  getNextId.mockImplementation(() => 42);
  const newState = reducer(initialState, addPostIt(postItAuthor));
  expect(newState).toEqual({
    ...initialState,
    42: { ...newPostItState, id: 42, author: postItAuthor }
  });
});

it("updates a post it", () => {
  const newText = "new Text";
  const newState = reducer(initialState, updatePostIt(1, newText));
  expect(newState[1]).toEqual({
    ...initialState[1],
    text: newText,
  });
});

it("updates the position", () => {
  const newState = reducer(initialState, updatePosition(1, 200, 300));
  expect(newState[1]).toEqual({
    ...initialState[1],
    xPos: 200,
    yPos: 300,
  })
})

it("updates the colour", () => {
  const newState = reducer(initialState, updateColour(1, "red"));
  expect(newState[1]).toEqual({
    ...initialState[1],
    colour: "red"
  })
})

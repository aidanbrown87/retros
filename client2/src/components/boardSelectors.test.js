import { mapStateToProps } from './Board';

it("should filter out grouped post its", () => {
  const state = {
    postIts: {
      "111" : { id: "111", something: "else" },
      "222" : { id: "222", something: "different" },
    },
    groups: {
      "aaa": { postIts: ["111"]}
    }
  }

  expect(mapStateToProps(state)).toEqual({
    postIts: [
      { id: "222", something: "different" }
    ],
    groups: state.groups
  })
});
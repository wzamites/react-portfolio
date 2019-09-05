const defaultState = []

export default function(state=defaultState, action) {
  switch(action.type) {
    case "SKILL_TOGGLE":

    //if the state is double clicked, unselect it.
    if (state.includes(action.payload)) {
      return []

    //if the skill is selected, return the skill
    } else {
      return [action.payload]
    }
    default:
      return state
  }
}

//This is the code for AND
// //if the skill doesn't exist in the array, put it in there
// if (state.includes(action.payload)) {
//   return state.filter(word => word !== action.payload)
//
// //if the skill does exist in the array, take it out
// } else {
//   return [...state, action.payload]
// }

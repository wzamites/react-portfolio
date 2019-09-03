import languageList from '../../assets/languageList.js'

const defaultState = []

export default function(state=defaultState, action) {
  switch(action.type) {
    case "SKILL_TOGGLE":

    //if the skill doesn't exist in the array, put it in there
    if (state.includes(action.payload)) {
      return state.filter(word => word !== action.payload)

    //if the skill does exist in the array, take it out
    } else {
      return [...state, action.payload]
    }
    default:
      return state
  }
}

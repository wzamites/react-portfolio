import languageList from '../../assets/languageList.js'

const defaultState = {}
languageList.forEach((user)=>defaultState[user.name] = false);

export default function(state=defaultState, action) {
  switch(action.type) {
    case "SKILL_TOGGLE":
      return {
        ...state,
        [action.payload]: !state[action.payload]
      }
    default:
      return state
  }
}

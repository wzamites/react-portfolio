import skillsList from '../../assets/skillsList.js'

const defaultState = {}
skillsList.forEach((user)=>defaultState[user.name] = false);

export default function(state=defaultState, action) {
  switch(action.type) {
    case "SKILL_TOGGLE":
    console.log(state);
      return {
        ...state,
        [action.payload]: !state[action.payload]
      }
  }
  return state
}

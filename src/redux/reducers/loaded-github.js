const defaultState = []

export default function(state=defaultState, action) {
  switch(action.type) {
    case "LOAD_API":
      return action.payload
    default:
      return state
  }
}

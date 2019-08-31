//Action Creator
export const whatever = (skill) => {
  return {
    type: "SKILL_TOGGLE",
    payload: skill
  }
}

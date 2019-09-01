//Action Creator
export const selectSkill = (skill) => {
  return {
    type: "SKILL_TOGGLE",
    payload: skill
  }
}

import {combineReducers} from 'redux'
import Github from './loaded-github'
import SkillSelected from './skill-selection'

const allReducers = combineReducers({
  repositories: Github,
  selectedskills: SkillSelected,
})

export default allReducers

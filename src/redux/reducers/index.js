import {combineReducers} from 'redux'
import Github from './loaded-github'
import SkillArray from './skill-array'

const allReducers = combineReducers({
  repositories: Github,
  skillarray: SkillArray
})

export default allReducers

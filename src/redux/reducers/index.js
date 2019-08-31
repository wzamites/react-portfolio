import {combineReducers} from 'redux'
import FakeApi from './reducer-fakeapi'
import SkillSelected from './skill-selection'

const allReducers = combineReducers({
  repositories: FakeApi,
  selectedskills: SkillSelected
})

export default allReducers

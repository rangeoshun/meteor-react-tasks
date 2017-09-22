import { combineReducers } from 'redux'

import tasks from './tasks'
import taskForm from './task-form'

export default combineReducers({
	tasks,
	taskForm
})

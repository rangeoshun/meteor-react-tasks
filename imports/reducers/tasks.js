import {
	ADD_TASK,
	REMOVE_TASK,
	CHECK_TASK,
	UNCHECK_TASK,
	SET_TASKS
} from '../constants/actions'

import mapReducer from './map-reducer'

const tasks = {}

export default mapReducer(tasks)

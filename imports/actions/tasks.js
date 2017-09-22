import {
	ADD_TASK,
	REMOVE_TASK,
	CHECK_TASK,
	UNCHECK_TASK
} from '../constants/actions'

import {
	ADD_TASK_METHOD,
	REMOVE_TASK_METHOD,
	UPDATE_TASK_METHOD
} from '../constants/methods'

export const addTask = todo => ({
	type: ADD_TASK,
	call: Meteor.call(ADD_TASK_METHOD, todo)
})

export const removeTask = id => ({
	type: REMOVE_TASK,
	call: Meteor.call(REMOVE_TASK_METHOD, id)
})

export const checkTask = (id, done) => ({
	type: CHECK_TASK,
	call: Meteor.call(UPDATE_TASK_METHOD, { id, done: true })
})

export const uncheckTask = (id, done) => ({
	type: UNCHECK_TASK,
	call: Meteor.call(UPDATE_TASK_METHOD, { id, done: true })
})

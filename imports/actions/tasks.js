import { startSubscription } from "meteor-redux-middlewares"

import {
	ADD_TASK,
	REMOVE_TASK,
	CHECK_TASK,
	UNCHECK_TASK,
	TASKS_SUBSCRIPTION_READY,
	TASKS_SUBSCRIPTION_CHANGED
} from "/imports/constants/actions"

import { TASKS_SUB } from "/imports/constants/collections"

import {
	ADD_TASK_METHOD,
	REMOVE_TASK_METHOD,
	UPDATE_TASK_METHOD
} from "../constants/methods"

import Tasks from "/imports/api/tasks"

export const loadTasks = () =>
	startSubscription({
		key: TASKS_SUB,
		get: () => Tasks.find().fetch(),
		subscribe: () => Meteor.subscribe(TASKS_SUB)
	})

export const addTask = todo => ({
	type: ADD_TASK,
	call: Meteor.call(ADD_TASK_METHOD, todo)
})

export const removeTask = _id => ({
	type: REMOVE_TASK,
	call: Meteor.call(REMOVE_TASK_METHOD, { _id })
})

export const checkTask = _id => ({
	type: CHECK_TASK,
	call: Meteor.call(UPDATE_TASK_METHOD, { _id, done: true })
})

export const uncheckTask = _id => ({
	type: UNCHECK_TASK,
	call: Meteor.call(UPDATE_TASK_METHOD, { _id, done: false })
})

import { STOP_SUBSCRIPTION } from "meteor-redux-middlewares"

import {
	TASKS_SUBSCRIPTION_READY,
	TASKS_SUBSCRIPTION_CHANGED
} from "/imports/constants/actions"
import { TASKS_SUB } from "/imports/constants/collections"

import mapReducer from "./mapReducer"

const initialState = {
	ready: false,
	list: []
}

const tasks = {
	[TASKS_SUBSCRIPTION_READY]: (state = initialState, { payload }) => ({
		...state,
		ready: true
	}),
	[TASKS_SUBSCRIPTION_CHANGED]: (state = initialState, { payload }) => ({
		...state,
		list: payload
	}),
	[STOP_SUBSCRIPTION]: (state = initialState, { payload }) =>
		payload === TASKS_SUB
			? { ...state, tasksSubscriptionStopped: true }
			: { state }
}

export default mapReducer(tasks, initialState)

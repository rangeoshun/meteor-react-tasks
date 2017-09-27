import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import tasks from "./tasks"
import taskForm from "./task-form"

export default combineReducers({
	tasks,
	taskForm,
	routing: routerReducer
})

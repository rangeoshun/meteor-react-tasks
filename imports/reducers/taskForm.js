import { CHANGE_TASK_INPUT_VALUE } from "../constants/actions"

import mapReducer from "./mapReducer"

const initialState = { text: "" }

const taskForm = {
	[CHANGE_TASK_INPUT_VALUE]: (state = initialState, { text = "" }) => ({
		...state,
		text
	})
}

export default mapReducer(taskForm, initialState)

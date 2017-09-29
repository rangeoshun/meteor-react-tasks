import { CHANGE_TASK_INPUT_VALUE } from '../constants/actions'

export const changeTaskInputValue = text => ({
	type: CHANGE_TASK_INPUT_VALUE,
	text
})

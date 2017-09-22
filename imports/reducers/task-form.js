import { CHANGE_TASK_INPUT_VALUE } from '../constants/actions'

import mapReducer from './map-reducer'

const initialState = { text: '' }

const taskForm = {
	[CHANGE_TASK_INPUT_VALUE]: (state = initialState, { text = '' }) => (
		console.log(text),
		{
			...state,
			text: text.trim()
		}
	)
}

export default mapReducer(taskForm, initialState)

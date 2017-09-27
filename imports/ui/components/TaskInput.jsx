import React from "react"
import TextField from "material-ui/TextField"
import { HOC } from "formsy-react"

import withTaskFormActions from "../containers/withTaskFormActions"

const TaskInput = ({ name, getValue, changeTaskInputValue, style }) => (
	<TextField
		name={name}
		type="text"
		label="Type to add new tasks"
		style={style}
		value={getValue() || ""}
		onChange={({ target }) => changeTaskInputValue(target.value)}
	/>
)

export default HOC(withTaskFormActions(TaskInput))

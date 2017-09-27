import React, { Component, PropTypes } from "react"
import { bindActionCreators } from "redux"
import { Form } from "formsy-react"

import TaskInput from "./TaskInput"

import withTaskForm from "../containers/withTaskForm"
import withTaskFormActions from "../containers/withTaskFormActions"
import withTaskActions from "../containers/withTaskActions"

class TaskForm extends Component {
	addTask() {
		const { addTask, taskForm } = this.props

		addTask({ text: taskForm.text })
		this.clearForm()
	}

	clearForm() {
		const { changeTaskInputValue } = this.props

		changeTaskInputValue()
	}

	componentWillReceiveProps({ taskForm }) {
		const { form } = this.refs

		form.reset({
			text: taskForm.text
		})
	}

	render() {
		const { taskForm = {} } = this.props

		return (
			<Form
				ref="form"
				onKeyPress={({ which }) =>
					which === 13 ? this.addTask() : null}
			>
				<TaskInput
					name="text"
					value={taskForm.text}
					onValidSubmit={() => this.addTask()}
				/>
			</Form>
		)
	}
}

export default withTaskForm(withTaskFormActions(withTaskActions(TaskForm)))

import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

import TaskItem from './TaskItem'

import withTasks from '../containers/withTasks'

// App component - represents the whole app
const TaskList = ({ tasks }) => (
	<ul>{tasks.map(task => <TaskItem {...task} key={task._id} />)}</ul>
)

export default withTasks(TaskList)

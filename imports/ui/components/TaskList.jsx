import React, { Component, PropTypes } from "react"

import withTasks from "../containers/withTasks"
import TaskItem from "./TaskItem"

// App component - represents the whole app
const TaskList = ({ tasks, loadTasks }) => (
  <ul>
    {!tasks.ready ? (
      (loadTasks(), null)
    ) : (
      tasks.list.map(task => <TaskItem {...task} key={task._id} />)
    )}
  </ul>
)

export default withTasks(TaskList)

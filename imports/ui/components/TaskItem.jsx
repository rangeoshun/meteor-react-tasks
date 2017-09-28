import React, { Component, PropTypes } from "react"

import withTaskActions from "/imports/ui/containers/withTaskActions"

// Task component - represents a single todo item
const TaskItem = ({ _id, text, done, checkTask, uncheckTask, removeTask }) => (
  <li>
    <div>
      {done ? (
        <i>
          <strike>{text}</strike>
        </i>
      ) : (
        <b>{text}</b>
      )}
    </div>
    <br />
    <small>
      <a
        href="#"
        className="task-action"
        onClick={() => (done ? uncheckTask(_id) : checkTask(_id))}
      >
        {done ? "uncheck" : "check"}
      </a>
      {done && (
        <a href="#" className="task-action" onClick={() => removeTask(_id)}>
          delete
        </a>
      )}
    </small>
  </li>
)

export default withTaskActions(TaskItem)

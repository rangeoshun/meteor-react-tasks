import React, { Component, PropTypes } from "react"
import ReactDOM from "react-dom"
import Grid from "material-ui/Grid"
import Paper from "material-ui/Paper"
import Card, { CardActions, CardContent } from "material-ui/Card"

import TaskList from "./TaskList"
import TaskForm from "./TaskForm"

// App component - represents the whole app
const App = () => (
	<Grid container spacing={24}>
		<Grid item xs={12} sm={6} lg={4} className="container">
			<Paper>
				<header>
					<h1>Todo List</h1>
					<TaskForm />
				</header>
				<TaskList />
			</Paper>
		</Grid>
	</Grid>
)

export default App

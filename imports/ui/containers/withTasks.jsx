import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { loadTasks } from "/imports/actions/tasks"

const mapStateToProps = ({ tasks }) => ({
	tasks
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators({ loadTasks }, dispatch)
})

const HOC = EnhancedComponent =>
	connect(mapStateToProps, mapDispatchToProps)(props => (
		<EnhancedComponent {...props} />
	))

export default HOC

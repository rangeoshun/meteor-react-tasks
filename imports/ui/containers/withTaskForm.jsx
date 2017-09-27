import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { Tasks } from "../../api/tasks"

const mapStateToProps = ({ taskForm }) => ({
	taskForm
})

const HOC = EnhancedComponent =>
	connect(mapStateToProps)(props => <EnhancedComponent {...props} />)

export default HOC

import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import * as actions from "../../actions/tasks"

const HOC = EnhancedComponent =>
	connect(() => ({}), mapDispatchToProps)(({ ...props }) => (
		<EnhancedComponent {...props} />
	))

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(actions, dispatch)
})

export default HOC

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import connectMeteor from 'react-redux-meteor-data'

import { Tasks } from '../api/tasks'

const mapTrackerToProps = props => {
	const sub = Meteor.subscribe('tasks')

	return {
		tasks: Tasks.find().fetch()
	}
}

const HOC = EnhancedComponent =>
	connectMeteor(mapTrackerToProps)(props => <EnhancedComponent {...props} />)

export default HOC

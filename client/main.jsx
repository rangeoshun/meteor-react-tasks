import React from "react"
import { Meteor } from "meteor/meteor"
import { render } from "react-dom"

import { createRouter, logger } from "meteor/rangeoshun:ssr"

import MainClient from "/imports/ui/components/MainClient"
import appReducers from "/imports/reducers"

createRouter({
	MainApp: MainClient,
	appReducers
})

/*
Meteor.startup(() => {
	render(<MainClient />, document.getElementById("react"))
})
*/

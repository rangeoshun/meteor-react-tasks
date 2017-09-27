import createReactiveMiddlewares from "meteor-redux-middlewares"
import { applyMiddleware, createStore, compose } from "redux"

import { Tracker } from "meteor/tracker"

import reducers from "../reducers"

const { sources, subscriptions } = createReactiveMiddlewares(Tracker)

export default createStore(
	reducers,
	compose(
		applyMiddleware(sources, subscriptions),
		global.window && window.devToolsExtension
			? window.devToolsExtension()
			: f => f
	)
)

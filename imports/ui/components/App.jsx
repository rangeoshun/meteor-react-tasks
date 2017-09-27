import React from "react"
import { Provider } from "react-redux"
import { Router, Switch, Route } from "react-router"
import createBrowserHistory from "history/createBrowserHistory"
import { syncHistoryWithStore } from "react-router-redux"

import { Meteor } from "meteor/meteor"

import store from "/imports/store"
import Home from "./Home"
import NotFound from "./NotFound"

const App = ({ url }) => (
	<div>
		<Provider store={store}>
			<Router history={createBrowserHistory()}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="*" component={NotFound} />
				</Switch>
			</Router>
		</Provider>
	</div>
)

export default App

import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { Provider } from 'react-redux-meteor'

import store from '../imports/state/state'
import App from '../imports/components/App'

Meteor.startup(() => {
	render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('render-target')
	)
})

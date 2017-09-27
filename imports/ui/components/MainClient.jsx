import React from "react"
import { connect } from "react-redux"
import Helmet from "react-helmet"

import { MuiThemeProvider } from "material-ui/styles"
import createGenerateClassName from "material-ui/styles/createGenerateClassName"

import JssProvider from "react-jss/lib/JssProvider"
import { SheetsRegistry } from "react-jss/lib/jss"
import { create } from "jss"
import preset from "jss-preset-default"

import App from "./App"

import theme from "/imports/ui/styles/theme"

class MainClient extends React.Component {
	// Remove the server-side injected CSS.
	componentDidMount() {
		const jssStyles = document.getElementById("jss-server-side")
		if (!jssStyles || !jssStyles.parentNode) return

		jssStyles.parentNode.removeChild(jssStyles)
	}

	render() {
		return (
			<div>
				<MuiThemeProvider theme={theme}>
					<App {...this.props} />
				</MuiThemeProvider>
			</div>
		)
	}
}

export default MainClient

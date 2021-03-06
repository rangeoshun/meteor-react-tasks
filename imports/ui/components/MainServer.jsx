import React from "react"
import { connect } from "react-redux"
import Helmet from "react-helmet"

import { MuiThemeProvider } from "material-ui/styles"
import createGenerateClassName from "material-ui/styles/createGenerateClassName"
import { sheetsManager } from "material-ui/styles"
import JssProvider from "react-jss/lib/JssProvider"
import { SheetsRegistry } from "react-jss/lib/jss"
import { create } from "jss"
import preset from "jss-preset-default"

import App from "./App"

import theme from "/imports/ui/styles/theme"

const HTMLComponent = ({ url, sheetsRegistry, jss, generateClassName }) => (
	<JssProvider
		registry={sheetsRegistry}
		jss={jss}
		generateClassName={generateClassName}
	>
		<MuiThemeProvider theme={theme} sheetsManager={new Map()}>
			<App url={url} />
		</MuiThemeProvider>
	</JssProvider>
)

const HEADComponent = ({ sheetsRegistry }) => (
	<Helmet>
		<title>Todo List</title>
		<link rel="stylesheet" type="text/css" src="/styles/main.css" />
		<style id="jss-server-side">{sheetsRegistry.toString()}</style>
	</Helmet>
)

const MainServer = ({ url }) => {
	const sheetsRegistry = new SheetsRegistry()
	const jss = create(preset())
	const generateClassName = createGenerateClassName()
	let styleText

	return (
		<div>
			<HTMLComponent
				{...{
					url,
					sheetsRegistry,
					jss,
					generateClassName
				}}
			/>
			<HEADComponent
				{...{
					sheetsRegistry
				}}
			/>
		</div>
	)
}

export default MainServer

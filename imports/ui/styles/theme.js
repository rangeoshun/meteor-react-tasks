import { createMuiTheme } from "material-ui/styles"
import createPalette from "material-ui/styles/createPalette"
import { green, red } from "material-ui/colors"

const theme = createMuiTheme({
	palette: createPalette({
		primary: green,
		accent: red,
		type: "light"
	})
})

export default theme

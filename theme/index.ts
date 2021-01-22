import { createMuiTheme } from "@material-ui/core"

const theme = createMuiTheme({
	palette: {
		primary: {
			50: "#def6ff",
			100: "#b6defb",
			200: "#8bc6f3",
			300: "#60b0ea",
			400: "#3599e3",
			500: "#1c7fca",
			600: "#10639e",
			700: "#044772",
			800: "#002a47",
			900: "#000f1d",
			main: "#1c7fca",
		},
		secondary: {
			50: "#fff1e1",
			100: "#fed9b4",
			200: "#fcc084",
			300: "#faa853",
			400: "#f98f25",
			500: "#e07611",
			600: "#ae5c0b",
			700: "#7d4205",
			800: "#4b2701",
			900: "#1c0c00",
			main: "#fed9b4",
		},
		common: {
			white: "#fcfcfc",
			black: "#4B4B4B",
		},
		background: {
			default: "#fcfcfc",
		},
	},
	typography: {
		fontFamily: [
			'"Inter"',
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
})

export default theme

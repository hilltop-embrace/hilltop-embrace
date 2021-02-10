import { makeStyles } from "@material-ui/core/styles"

const useCalendarToolbarStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(0.75),
		color: theme.palette.text.primary,
	},
	month: {
		fontWeight: "bold",
		"& span": {
			fontWeight: 300,
		},
	},
	controls: {
		"& button svg": {
			width: 20,
			height: "auto",
			[theme.breakpoints.up("md")]: {
				width: 30,
			},
		},
	},
}))

export default useCalendarToolbarStyles

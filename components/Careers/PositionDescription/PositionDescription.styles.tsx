import { makeStyles } from "@material-ui/core/styles"

const usePositionDescriptionStyles = makeStyles((theme) => ({
	root: {
		padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`,
		"& h1, & h2": {
			fontSize: theme.typography.fontSize * 1.75,
		},
		"& h1": {
			fontWeight: "bold",
		},
		"& h3, & h4": {
			fontSize: theme.typography.fontSize * 1.5,
		},
		"& h3": {
			fontWeight: "bold",
		},
		"& h5, & h6": {
			fontSize: theme.typography.fontSize * 1.25,
		},
		"& h5": {
			fontWeight: "bold",
		},

		"& ul, & ol": {
			marginTop: 0,
		},
		"& li": {
			fontSize: theme.typography.body1.fontSize,
			fontWeight: 300,
			marginTop: 0,
			marginBottom: theme.spacing(1),
			"& p": {
				margin: 0,
			},
		},
		"& p": {
			fontWeight: 300,
			fontSize: theme.typography.body1.fontSize,
		},
	},
	title: {
		"&&": {
			fontSize: theme.typography.fontSize * 2,
		},
	},
}))

export default usePositionDescriptionStyles

import { makeStyles } from "@material-ui/core/styles"

const useFooterStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
	header: {
		fontWeight: 400,
	},
	link: {
		padding: theme.spacing(0.5),
		margin: theme.spacing(0.25),
		color: theme.palette.text.primary,
		fontSize: theme.typography.fontSize * 1.5,
		transition: theme.transitions.create(["color"]),
		"&:hover, &:focus": {
			color: theme.palette.primary.main,
		},
	},
}))

export default useFooterStyles

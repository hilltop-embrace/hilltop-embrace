import { makeStyles } from "@material-ui/core/styles"

const useContactFormItemStyles = makeStyles((theme) => ({
	root: {
		transition: theme.transitions.create(["color"]),
	},
	label: {
		textTransform: "uppercase",
		fontSize: theme.typography.fontSize,
		fontWeight: 500,
	},
}))

export default useContactFormItemStyles

import { makeStyles } from "@material-ui/core/styles"

const usePositionsSelectorStyles = makeStyles((theme) => ({
	button: {
		margin: `0 ${theme.spacing(1)}px`,
		fontWeight: "normal",
		fontSize: 18,
		borderColor: "transparent",
		transition: theme.transitions.create(["color, border-color"]),
	},
	activeButton: {
		borderColor: theme.palette.primary.main,
	},
}))

export default usePositionsSelectorStyles

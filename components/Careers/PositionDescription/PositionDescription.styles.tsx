import { makeStyles } from "@material-ui/core/styles"

const usePositionDescriptionStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
	title: {
		fontSize: theme.typography.fontSize * 2,
	},
}))

export default usePositionDescriptionStyles

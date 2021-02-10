import { makeStyles } from "@material-ui/core/styles"

const useNewsletterDialogStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(3),
	},
	header: {
		fontSize: theme.typography.fontSize * 2,
	},
	button: {
		height: 59,
	},
}))

export default useNewsletterDialogStyles

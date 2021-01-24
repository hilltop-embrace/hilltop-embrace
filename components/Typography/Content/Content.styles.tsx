import { makeStyles } from "@material-ui/core/styles"

const useContentStyles = makeStyles((theme) => ({
	root: {
		marginBottom: theme.spacing(-1.5),
	},
	item: {
		marginBottom: theme.spacing(1.5),
	},
}))

export default useContentStyles

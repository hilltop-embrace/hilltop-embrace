import { makeStyles } from "@material-ui/core/styles"

const useHyperlinkStyles = makeStyles((theme) => ({
	root: {
		cursor: "pointer",
		color: theme.palette.primary.main,
		backgroundImage: `linear-gradient(transparent calc(100% - 2px), ${theme.palette.primary.main} 1px)`,
		textDecoration: "none",
		backgroundSize: "0 100%",
		backgroundPosition: "-100%",
		position: "relative",
		backgroundRepeat: "no-repeat",
		transition: theme.transitions.create(["background-size"]),
		"&:hover, &:focus": {
			backgroundSize: "100% 100%",
			textDecoration: "none",
		},
	},
}))

export default useHyperlinkStyles

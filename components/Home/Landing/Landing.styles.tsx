import { fade, makeStyles } from "@material-ui/core/styles"

const useLandingStyles = makeStyles((theme) => ({
	root: {
		height: "75vh",
		width: "100%",
		"& .react-parallax-background-children": {
			width: "100%",
			height: "100%",
		},
	},
	background: {
		height: "100%",
		width: "100%",
		position: "relative",
		overflow: "hidden",
	},
	blurredImage: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "center",
		filter: "blur(2rem)",
		transform: "scale(1.2)",
	},
	content: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%",
		textAlign: "center",
		color: theme.palette.common.white,
		textShadow: `2px 2px 6px ${fade(theme.palette.common.black, 0.4)}`,
		backgroundColor: fade(theme.palette.common.black, 0.35),
	},
	title: {
		fontWeight: 500,
		fontSize: "calc(3rem + 3.5vw)",
		marginBottom: theme.spacing(2),
		letterSpacing: 1,
		lineHeight: 1,
		[theme.breakpoints.up("md")]: {
			marginBottom: theme.spacing(4),
		},
	},
	subtitle: {
		fontWeight: "normal",
		fontSize: "calc(1rem + 1vw)",
		fontStyle: "italic",
	},
}))

export default useLandingStyles

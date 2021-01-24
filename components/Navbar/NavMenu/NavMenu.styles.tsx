import { makeStyles } from "@material-ui/core/styles"

const useNavMenuStyles = makeStyles((theme) => ({
	root: {
		flexDirection: "column",
		width: "100%",
		[theme.breakpoints.up("md")]: {
			flexDirection: "row",
			width: "auto",
		},
	},
	navItem: {
		color: theme.palette.common.white,
		opacity: 0.85,
		fontWeight: "bold",
		fontSize: theme.typography.fontSize * 1.5,
		fontFamily: theme.typography.fontFamily,
		textTransform: "capitalize",
		padding: `${theme.spacing(1.75)}px ${theme.spacing(1.5)}px`,
		margin: `${theme.spacing(1.25)}px 0`,
		borderBottom: "2px solid transparent",
		transition: theme.transitions.create(["opacity", "border-bottom-color"]),
		"&:hover, &:focus": {
			textDecoration: "none",
			opacity: 1,
			borderBottomColor: theme.palette.common.white,
		},
		[theme.breakpoints.up("md")]: {
			fontSize: theme.typography.fontSize,
			borderBottom: "2px solid transparent",
			padding: theme.spacing(1),
			margin: `0 ${theme.spacing(1)}px`,
			transition: theme.transitions.create([
				"opacity",
				"border-bottom-color",
				"padding",
				"color",
			]),
			"&:hover, &:focus": {
				opacity: 1,
			},
		},
	},
	navItemCta: {
		width: 300,
		borderRadius: theme.shape.borderRadius,
		padding: `${theme.spacing(2.5)}px 0`,
		backgroundColor: theme.palette.secondary.main,
		borderBottom: "none",
		opacity: 1,
		boxShadow: theme.shadows[2],
		transition: theme.transitions.create("transform"),
		"&:hover, &:focus": {
			transform: "scale(1.05)",
		},
		"&:active": {
			transform: "scale(0.95)",
		},
		[theme.breakpoints.up("md")]: {
			width: "auto",
			padding: `${theme.spacing(1.5)}px ${theme.spacing(2.5)}px`,
			color: `${theme.palette.common.white} !important`,
		},
	},
	navItemActive: {
		opacity: 1,
		borderBottomColor: theme.palette.common.white,
		color: theme.palette.common.white,
	},
}))

export default useNavMenuStyles

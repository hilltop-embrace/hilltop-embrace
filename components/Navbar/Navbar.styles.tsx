import { makeStyles } from "@material-ui/core/styles"

interface NavbarStylesProps {
	isScrolled: boolean
}

const useNavbarStyles = makeStyles((theme) => ({
	root: {
		zIndex: 9999,
		backgroundColor: theme.palette.primary.main,
		padding: `${theme.spacing(1.5)}px ${theme.spacing(5)}px`,
		transition: theme.transitions.create([
			"background-color",
			"padding",
			"box-shadow",
		]),
		[theme.breakpoints.up("md")]: {
			padding: (props: NavbarStylesProps) =>
				props.isScrolled
					? `${theme.spacing(0)}px ${theme.spacing(5)}px`
					: `${theme.spacing(1.5)}px ${theme.spacing(5)}px`,
		},
	},
	toolbar: {
		justifyContent: "space-between",
	},
	logo: {
		cursor: "pointer",
		width: "auto",
		height: "2.5rem",
		fill: theme.palette.common.white,
		opacity: 0.85,
		transition: theme.transitions.create([
			"opacity",
			"fill",
			"height",
			"transform",
		]),
		"&:hover": {
			opacity: 1,
		},
		"&:active": {
			transform: "scale(0.9)",
		},
		[theme.breakpoints.up("md")]: {
			height: (props: NavbarStylesProps) =>
				props.isScrolled ? "2.5rem" : "3rem",
		},
	},
	drawer: {
		padding: `${theme.spacing(1) + 60}px ${theme.spacing(
			7.5
		)}px ${theme.spacing(2)}px`,
		backgroundColor: theme.palette.primary.main,
		zIndex: 9998,
	},
}))

export default useNavbarStyles

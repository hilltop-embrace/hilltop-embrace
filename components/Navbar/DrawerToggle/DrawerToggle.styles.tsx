import { makeStyles } from "@material-ui/core/styles"

interface DrawerToggleStylesProps {
	isOpen: boolean
}

const useDrawerToggleStyles = makeStyles((theme) => ({
	root: {
		display: "block",
		opacity: 0.85,
		transition: theme.transitions.create("opacity"),
		"&:hover": {
			opacity: 1,
		},
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	svg: {
		fill: "transparent",
		stroke: theme.palette.common.white,
		strokeWidth: 6,
		width: 36,
		height: 36,
		"& path": {
			strokeDasharray: (props: DrawerToggleStylesProps) =>
				props.isOpen ? "90 207" : "60 207",
			strokeDashoffset: (props: DrawerToggleStylesProps) =>
				props.isOpen ? -134 : 0,
			transition: theme.transitions.create([
				"stroke-dasharray",
				"stroke-dashoffset",
			]),
			"&:nth-child(2)": {
				strokeDasharray: (props: DrawerToggleStylesProps) =>
					props.isOpen ? "1 60" : "60 60",
				strokeDashoffset: (props: DrawerToggleStylesProps) =>
					props.isOpen ? -30 : 0,
			},
		},
	},
}))

export default useDrawerToggleStyles

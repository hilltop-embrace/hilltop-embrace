import { Box, IconButton, Typography } from "@material-ui/core"
import { ToolbarProps } from "react-big-calendar"
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr"
import { MdToday } from "react-icons/md"
import useCalendarToolbarStyles from "./CalendarToolbar.styles"

const CalendarToolbar: React.FC<ToolbarProps> = ({ onNavigate, date }) => {
	const classes = useCalendarToolbarStyles()

	return (
		<Box
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			className={classes.root}
		>
			<Typography variant="h5" className={classes.month}>
				{date.toLocaleString("default", { month: "long" })}{" "}
				<span>{date.toLocaleString("default", { year: "numeric" })}</span>
			</Typography>
			<Typography variant="h6"></Typography>
			<Box className={classes.controls}>
				<IconButton onClick={() => onNavigate("PREV")} color="inherit">
					<GrFormPreviousLink />
				</IconButton>
				<IconButton onClick={() => onNavigate("TODAY")} color="inherit">
					<MdToday />
				</IconButton>
				<IconButton onClick={() => onNavigate("NEXT")} color="inherit">
					<GrFormNextLink />
				</IconButton>
			</Box>
		</Box>
	)
}

export default CalendarToolbar

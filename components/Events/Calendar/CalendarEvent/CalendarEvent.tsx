import { Event } from "@/content"
import { Box, useTheme } from "@material-ui/core"

interface CalendarEventProps {
	event: Event
}

const CalendarEvent: React.FC<CalendarEventProps> = ({ event }) => {
	const theme = useTheme()

	return (
		<Box
			bgcolor={
				event.customColor ||
				event.eventType?.fields.color ||
				theme.palette.primary.main
			}
			padding={0.5}
			borderRadius={theme.shape.borderRadius}
		>
			{event.title}
		</Box>
	)
}

export default CalendarEvent

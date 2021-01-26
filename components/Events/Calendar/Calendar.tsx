import { Event } from "@/content"
import moment from "moment"
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar"
import useCalendarStyles from "./Calendar.styles"
import CalendarEvent from "./CalendarEvent"
import CalendarToolbar from "./CalendarToolbar"

interface CalendarProps {
	events: Event[]
	selectedEvent?: Event
	updateSelectedEvent: (event: Event) => void
}

const localizer = momentLocalizer(moment)

const Calendar: React.FC<CalendarProps> = ({
	events,
	selectedEvent,
	updateSelectedEvent,
}) => {
	const classes = useCalendarStyles()

	return (
		<BigCalendar
			localizer={localizer}
			events={events}
			startAccessor={(event: Event) => new Date(event.beginningDate)}
			endAccessor={(event: Event) => new Date(event.endingDate)}
			selected={selectedEvent}
			onSelectEvent={updateSelectedEvent}
			views={["month"]}
			components={{
				toolbar: CalendarToolbar,
				event: CalendarEvent,
			}}
			className={classes.root}
		/>
	)
}

export default Calendar

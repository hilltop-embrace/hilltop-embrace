import { Calendar } from "@/components/Events"
import { HeroLayout } from "@/components/Layout"
import { Content, Header } from "@/components/Typography"
import { DAYS } from "@/constants"
import { Event } from "@/content"
import { fetchOneTimeEvents, fetchRecurringEvents } from "@/utils"
import { Grid, Typography } from "@material-ui/core"
import { GetStaticProps } from "next"
import { useState } from "react"

interface EventsPageProps {
	events: Event[]
}

const EventsPage: React.FC<EventsPageProps> = ({ events }) => {
	const [selectedEvent, setSelectedEvent] = useState<Event>()

	const updateSelectedEvent = (event: Event) => {
		setSelectedEvent(event)
	}

	return (
		<HeroLayout title="Get Involved">
			<Grid item xs={12}>
				<Header>Event Details</Header>
				{selectedEvent ? (
					<Content></Content>
				) : (
					<Typography variant="body1">
						Select an event from the calendar below to view the details and/or
						register.
					</Typography>
				)}
			</Grid>
			<Grid item xs={12}>
				<Calendar
					selectedEvent={selectedEvent}
					updateSelectedEvent={updateSelectedEvent}
					events={events}
				/>
			</Grid>
		</HeroLayout>
	)
}

export default EventsPage

export const getStaticProps: GetStaticProps = async () => {
	const oneTimeEventsRes = await fetchOneTimeEvents()
	const oneTimeEvents: Event[] = await oneTimeEventsRes.map(
		(event: { fields: Event[] }) => event.fields
	)
	const recurringEventsRes = await fetchRecurringEvents()
	const recurringEvents: Event[] = await recurringEventsRes.map(
		(event: { fields: Event[] }) => event.fields
	)

	const events = [...oneTimeEvents]

	recurringEvents.forEach((event) => {
		const beginningDate = new Date(event.beginningDate)
		const beginningHour = beginningDate.getHours()
		const beginningMinute = beginningDate.getMinutes()
		const endingDate = new Date(event.endingDate)
		const endingHour = endingDate.getHours()
		const endingMinute = endingDate.getMinutes()

		for (
			let date = beginningDate;
			date <= endingDate;
			date.setDate(date.getDate() + 1)
		) {
			date.setHours(0, 0, 0, 0)
			const year = date.getFullYear()
			const month = date.getMonth()
			const day = date.getDate()
			if (
				event.days?.some((day) => day === DAYS[date.getDay()]) &&
				!event.excludedDates?.some(
					(excludedDate) => date.getTime() === new Date(excludedDate).getTime()
				)
			) {
				events.push({
					...event,
					beginningDate: new Date(
						year,
						month,
						day,
						beginningHour,
						beginningMinute
					).toISOString(),
					endingDate: new Date(
						year,
						month,
						day,
						endingHour,
						endingMinute
					).toISOString(),
				})
			}
		}
	})

	return {
		props: {
			events,
		},
	}
}

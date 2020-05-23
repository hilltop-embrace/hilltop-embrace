import React, { useEffect, useState } from "react"
import Hero from "../components/Hero"
import { FluidContainer } from "../components/styles/FluidContainer"
import { StyledHeader } from "../components/styles/StyledHeader"
import { Container, Col, Row } from "react-bootstrap"
import { Calendar, momentLocalizer } from "react-big-calendar"
import moment from "moment"
import Client from "../Contentful"
// import "react-big-calendar/lib/css/react-big-calendar.css"
import "./styles/Events.scss"
import { StyledParagraph } from "../components/styles/StyledParagraph"
import { StyledAnchor } from "../components/styles/StyledAction"
import Title from "../components/Title"

export default function Events() {
	const [eventsList, setEventsList] = useState([])
	const [selectedEvent, setSelectedEvent] = useState(null)

	const getEvents = async () => {
		try {
			let response = await Client.getEntries({
				content_type: "event",
				order: "fields.startDateTime",
			})
			let events = []
			response.items.forEach((event) => {
				events.push({
					title: event.fields.title,
					description: event.fields.description,
					start: moment(event.fields.startDateTime).toDate(),
					end: moment(event.fields.endDateTime).toDate(),
					rawStart: event.fields.startDateTime,
					rawEnd: event.fields.endDateTime,
					location: event.fields.location,
					formLink: event.fields.formLink,
				})
			})
			setEventsList(events)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0)
		getEvents()
		return () => {}
	}, [])

	const localizer = momentLocalizer(moment)

	const handleEventSelection = (event, e) => {
		setSelectedEvent(event)
	}

	return (
		<>
			<Title subtitle="Events" />
			<div className="big-container" id="events">
				<Hero title="Events" />
				<FluidContainer fluid>
					<Container className="mb-container">
						<Row>
							<Col>
								<StyledHeader>Event Calendar</StyledHeader>
							</Col>
						</Row>
						<Row>
							<Col style={{ height: 975 }}>
								<Calendar
									localizer={localizer}
									events={eventsList}
									startAccessor="start"
									endAccessor="end"
									views={["month", "week"]}
									onSelectEvent={handleEventSelection}
								/>
							</Col>
						</Row>
					</Container>
					<Container>
						<Row>
							<Col>
								<StyledHeader>Selected Event Details</StyledHeader>
							</Col>
						</Row>
						{selectedEvent == null ? (
							<Row>
								<Col>
									<StyledParagraph>
										Please select an event from the calendar above to view its
										details and/or sign up.
									</StyledParagraph>
								</Col>
							</Row>
						) : (
							<>
								<Row>
									<Col>
										<StyledParagraph style={{ fontSize: "1.5rem" }}>
											<em>
												<strong>{selectedEvent.title}</strong>
											</em>
										</StyledParagraph>
									</Col>
								</Row>
								<Row>
									<Col>
										<StyledParagraph>
											{selectedEvent.description}
										</StyledParagraph>
									</Col>
								</Row>
								<Row>
									<Col>
										<StyledParagraph>
											<em>Location: </em>
											{selectedEvent.location}
										</StyledParagraph>
									</Col>
								</Row>
								{moment(selectedEvent.rawStart).format("DD MM YYYY") ===
								moment(selectedEvent.rawEnd).format("DD MM YYYY") ? (
									<Row>
										<Col>
											<StyledParagraph>
												<em>Date: </em>
												{moment(selectedEvent.rawStart).format("MMM DD, YYYY")}
											</StyledParagraph>
										</Col>
									</Row>
								) : (
									<Row>
										<Col xs={6}>
											<StyledParagraph>
												<em>Start Date: </em>
												{moment(selectedEvent.rawStart).format("MMM DD, YYYY")}
											</StyledParagraph>
										</Col>
										<Col>
											<StyledParagraph>
												<em>End Date: </em>
												{moment(selectedEvent.rawEnd).format("MMM DD, YYYY")}
											</StyledParagraph>
										</Col>
									</Row>
								)}
								<Row>
									<Col xs={6}>
										<StyledParagraph>
											<em>Start Time: </em>
											{moment(selectedEvent.rawStart).format("h:mm A")}
										</StyledParagraph>
									</Col>
									<Col xs={6}>
										<StyledParagraph>
											<em>End Time: </em>
											{moment(selectedEvent.rawEnd).format("h:mm A")}
										</StyledParagraph>
									</Col>
								</Row>
								<Row style={{ margin: ".75rem -15px" }}>
									<Col style={{ height: 60 }}>
										<StyledAnchor href={selectedEvent.formLink}>
											Register
										</StyledAnchor>
									</Col>
								</Row>
							</>
						)}
					</Container>
				</FluidContainer>
			</div>
		</>
	)
}

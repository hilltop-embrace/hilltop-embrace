import React, { useEffect } from "react"
import Hero from "../components/Hero"
import { Container, Row, Col } from "react-bootstrap"
import { StyledHeader } from "../components/styles/StyledHeader"
import { StyledParagraph } from "../components/styles/StyledParagraph"
import { Link } from "react-router-dom"
import { FluidContainer } from "../components/styles/FluidContainer"
import Title from "../components/Title"

export default function About() {
	useEffect(() => {
		window.scrollTo(0, 0)
		return () => {}
	})
	return (
		<>
			<Title subtitle="About" />
			<div
				// style={{ backgroundColor: "black", height: 1000 }}
				id="about"
				className="big-container"
			>
				<Hero title="About Us" />
				<FluidContainer fluid>
					<Container className="mb-container">
						<Row>
							<Col>
								<StyledHeader>Our Mission</StyledHeader>
							</Col>
						</Row>
						<Row>
							<Col>
								<StyledParagraph>
									To develop personal relationships with the homeless and join
									their fight against systemic homelessness in New Brunswick,
									New Jersey.
								</StyledParagraph>
							</Col>
						</Row>
					</Container>
					<Container className="mb-container">
						<Row>
							<Col>
								<StyledHeader>Our Foundation</StyledHeader>
							</Col>
						</Row>
						<Row>
							<Col>
								<StyledParagraph>
									Hilltop Embrace was created because Rutgers students saw the
									dehumanizing effects of stigmas against the homeless
									community. In an effort to break those ideas, Hilltop Embrace
									creates an environment where individuals can develop
									intentional relationships with the homeless and vulnerable
									populations to provide them assistance for the present and
									future.
								</StyledParagraph>
							</Col>
						</Row>
					</Container>

					<Container className="mb-container">
						<Row>
							<Col>
								<StyledHeader>Our Purpose</StyledHeader>
							</Col>
						</Row>
						<Row>
							<Col>
								<StyledParagraph>
									Hilltop Embrace currently partners with a local organization,
									Welcome Table, to provide meals for the homeless. These are
									community dinners hosted by a network of churches. Due to
									COVID-19, we have been collecting donations and purchasing
									meals from local businesses and giving out meals to go.
								</StyledParagraph>
							</Col>
						</Row>
						<Row>
							<Col>
								<StyledParagraph>
									In the future, we look to work with local New Brunswick
									organizations to improve and create community centers. These
									will be designed with fellow students, organizations and local
									businesses to tackle many aspects of homelessness through
									social entrepreneurial actions.
								</StyledParagraph>
							</Col>
						</Row>
						<Row>
							<Col>
								<StyledParagraph>
									These actions will reflect our core values of aiding their
									daily lives while helping our community members to invest in
									themselves for a brighter future.
								</StyledParagraph>
							</Col>
						</Row>
					</Container>
					<Container>
						<Row>
							<Col>
								<StyledHeader>How You Can Help</StyledHeader>
							</Col>
						</Row>
						<Row>
							<Col>
								<StyledParagraph>
									We are currently taking the following items for donation:
								</StyledParagraph>
								<ul>
									<li>
										<StyledParagraph>Clothes</StyledParagraph>
									</li>
									<li>
										<StyledParagraph>Hygiene Products</StyledParagraph>
									</li>
									<li>
										<StyledParagraph>Feminine Products</StyledParagraph>
									</li>
									<li>
										<StyledParagraph>
											Non-Perishable Food Supplies
										</StyledParagraph>
									</li>
									<li>
										<StyledParagraph>Masks</StyledParagraph>
									</li>
									<li>
										<StyledParagraph>Encouragement Letters</StyledParagraph>
									</li>
								</ul>
							</Col>
							<Col xs={12} md={6}>
								<StyledParagraph>
									You can also support us financially:
								</StyledParagraph>
								<StyledParagraph>
									We have a “one-time” donation option and a “recurring” option.
									All money collected will be used for the homeless community
									and detailed financial spendings will be updated accordingly
									via on our website.
								</StyledParagraph>
							</Col>
						</Row>
						<Row>
							<Col>
								<StyledParagraph>
									If you would like to volunteer or collaborate please see our{" "}
									<Link to="/events">events page</Link> or contact us at{" "}
									<a href="mailto:hilltopembrace@gmail.com">
										HilltopEmbrace@gmail.com
									</a>
									. Thank you!
								</StyledParagraph>
							</Col>
						</Row>
					</Container>
				</FluidContainer>
			</div>
		</>
	)
}

import "./styles/Home.scss"

import { Col, Container, Row } from "react-bootstrap"

import { Link } from "react-scroll"
import React from "react"
import { StyledHeader } from "../components/styles/StyledHeader"
import { StyledLink } from "../components/styles/StyledAction"
import { StyledParagraph } from "../components/styles/StyledParagraph"
import Title from "../components/Title"

export default function Home() {
	return (
		<>
			<Title />
			<div id="home" className="big-container">
				<Container fluid id="landing-container">
					<div className="overlay"></div>
					<Container id="landing-content">
						<Row>
							<Col>
								<h1>Hilltop Embrace</h1>
							</Col>
						</Row>
						<Row>
							<Col>
								<h2>
									Developing personal relationships with the homeless, as we
									join their fight against systematic homelessness.
								</h2>
							</Col>
						</Row>
						{/* <Row>
							<Col>
								<Link id="learn-more-btn" smooth="easeInOutCubic" to="intro">
									Learn More
								</Link>
							</Col>
						</Row> */}
					</Container>
				</Container>
				<Container fluid id="intro" className="nav-padding">
					<Container className="mb-container">
						<Row>
							<Col>
								<StyledHeader>What We Do</StyledHeader>
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
						<Row style={{ margin: ".75rem -15px" }}>
							<Col style={{ height: "60px" }}>
								<StyledLink to="/about">Learn More</StyledLink>
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
							<Col xs={12} md={7}>
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
								<StyledParagraph>
									You can contact us via{" "}
									<a href="mailto:hilltopembrace@gmail.com">
										HilltopEmbrace@gmail.com
									</a>{" "}
									to schedule a pick up!
								</StyledParagraph>
							</Col>
							<Col xs={12} md={5}>
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
					</Container>
				</Container>
			</div>
		</>
	)
}

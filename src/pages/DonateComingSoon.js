import { Col, Row } from "react-bootstrap"

import { FluidContainer } from "../components/styles/FluidContainer"
import Hero from "../components/Hero"
import React from "react"
import Title from "../components/Title"

export default function DonateComingSoon() {
	return (
		<>
			<Title subtitle="Donate" />
			<div className="big-container" id="donate">
				<Hero title="Donations" />
				<FluidContainer
					fluid
					className="d-flex justify-content-center align-items-center"
					style={{ height: "75vh" }}
				>
					<Row>
						<Col>
							<h1>Coming soon!</h1>
						</Col>
					</Row>
				</FluidContainer>
			</div>
		</>
	)
}

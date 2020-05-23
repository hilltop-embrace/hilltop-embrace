import React, { useEffect, useState } from "react"
import Hero from "../components/Hero"
import { FluidContainer } from "../components/styles/FluidContainer"
import { StyledHeader } from "../components/styles/StyledHeader"
import { StyledParagraph } from "../components/styles/StyledParagraph"
import "./styles/Donate.scss"
import { Container, Row, Col } from "react-bootstrap"
import Loader from "../components/Loader"

export default function Donate() {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true)
		}, 750)
	})

	useEffect(() => {
		window.scrollTo(0, 0)
		return () => {}
	})

	return (
		<div className="big-container" id="donate">
			<Hero title="Donations" />
			<FluidContainer fluid>
				<Container>
					<Row>
						<Col>
							<StyledHeader>Donate To Us!</StyledHeader>
						</Col>
					</Row>
					<Loader loaded={loaded} height={487} />
					<Row
						style={{
							opacity: loaded ? 1 : 0,
							height: loaded ? 487 : 0,
							transition: "opacity 1s",
							overflow: "hidden",
							justifyContent: "center",
						}}
					>
						<Col>
							<script
								src="https://donorbox.org/widget.js"
								paypalExpress="false"
							></script>
							<iframe
								title="Donations"
								allowpaymentrequest=""
								frameborder="0"
								height="900px"
								name="donorbox"
								scrolling="no"
								seamless="seamless"
								src="https://donorbox.org/embed/hilltop-embrace-donations?default_interval=o"
								style={{
									width: "100%",
									minWidth: 250,
									// maxHeight: "none!important",
								}}
							></iframe>
						</Col>
					</Row>
					<Row>
						<Col>
							<StyledParagraph>
								All contributions are securely transacted via Donorbox and
								Stripe.
							</StyledParagraph>
						</Col>
					</Row>
				</Container>
			</FluidContainer>
		</div>
	)
}

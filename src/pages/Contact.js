import React, { useState } from "react"
import Title from "../components/Title"
import Hero from "../components/Hero"
import { FluidContainer } from "../components/styles/FluidContainer"
import { Container, Row, Col } from "react-bootstrap"
import { StyledHeader } from "../components/styles/StyledHeader"
import { StyledParagraph } from "../components/styles/StyledParagraph"
import { StyledButton } from "../components/styles/StyledAction"

export default function Contact() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const handleNameChange = (e) => {
		setName(e.target.value)
	}

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handleMessageChange = (e) => {
		setMessage(e.target.value)
	}

	const handleSubmit = (e) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": "contact",
				name: name,
				email: email,
				message: message,
			}),
		})
			.then(() => {
				alert("Message sent!")
				setName("")
				setEmail("")
				setMessage("")
			})
			.catch((error) => alert("There was an error."))

		e.preventDefault()
	}

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
			)
			.join("&")
	}

	return (
		<>
			<Title subtitle="Contact" />
			<div className="big-container" id="contact">
				<Hero title="Contact Us" />
				<FluidContainer fluid>
					<Container>
						<Row>
							<Col>
								<StyledHeader>Send Us a Message</StyledHeader>
								<form
									id="contact-form"
									data-netlify="true" //maybe don't need?
									onSubmit={handleSubmit}
								>
									<div className="form-group">
										<StyledParagraph className="mb-0">
											<label htmlFor="name">Name</label>
										</StyledParagraph>
										<input
											type="text"
											name="name"
											id="name"
											className="form-control"
											value={name}
											onChange={handleNameChange}
											required
										/>
									</div>
									<div className="form-group">
										<StyledParagraph className="mb-0">
											<label htmlFor="email">Email Address</label>
										</StyledParagraph>
										<input
											type="email"
											name="email"
											id="email"
											className="form-control"
											value={email}
											onChange={handleEmailChange}
											required
										/>
									</div>
									<div className="form-group">
										<StyledParagraph className="mb-0">
											<label htmlFor="message">Message</label>
										</StyledParagraph>
										<textarea
											name="message"
											className="form-control"
											rows="4"
											value={message}
											onChange={handleMessageChange}
											required
										></textarea>
									</div>
									<StyledButton type="submit" style={{ marginBottom: "2rem" }}>
										Submit
									</StyledButton>
								</form>
							</Col>
							<Col xs={{ span: 12, offset: 0 }} md={{ span: 4, offset: 1 }}>
								<StyledHeader>Email</StyledHeader>

								<StyledParagraph>
									<a href="mailto:hilltopembrace@gmail.com">
										HilltopEmbrace@gmail.com
									</a>
								</StyledParagraph>

								<StyledHeader style={{ marginTop: "2rem" }}>
									Address
								</StyledHeader>

								<StyledParagraph>
									323 George Street
									<br />
									New Brunswick, NJ 08901
								</StyledParagraph>
							</Col>
						</Row>
					</Container>
				</FluidContainer>
			</div>
		</>
	)
}

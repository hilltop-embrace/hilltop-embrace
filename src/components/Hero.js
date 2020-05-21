import React from "react"
import "./styles/Hero.scss"

export default function Hero({ title }) {
	return (
		<div className="hero">
			<div className="overlay"></div>
			<h1 className="hero-title">{title}</h1>
		</div>
	)
}

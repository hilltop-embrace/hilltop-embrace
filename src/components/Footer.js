import React from "react"
import { Link } from "react-router-dom"
import { IoLogoInstagram } from "react-icons/io"
import "./styles/Footer.scss"

export default function Footer() {
	return (
		<footer>
			<div id="footer-links">
				<Link to="/about" className="footer-link">
					About
				</Link>
				<Link to="/donate" className="footer-link">
					Donate
				</Link>
			</div>
			<a href="https://instagram.com" id="insta-link">
				<IoLogoInstagram style={{ height: 20, width: 20 }} />
			</a>
		</footer>
	)
}

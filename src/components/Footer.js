import "./styles/Footer.scss"

import { IoLogoInstagram } from "react-icons/io"
import { Link } from "react-router-dom"
import React from "react"

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
			<a href="https://www.instagram.com/hilltopembrace/" id="insta-link">
				<IoLogoInstagram style={{ height: 20, width: 20 }} />
			</a>
		</footer>
	)
}

import React, { useState, useEffect } from "react"
import "./styles/Header.scss"
import { Navbar, Nav } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { IoLogoInstagram } from "react-icons/io"
import { StyledLink } from "./styles/StyledAction"

export default function Header() {
	const [scrolled, setScrolled] = useState(window.scrollY > 75)
	const [open, setOpen] = useState(false)
	const [scrollPosition, setScrollPosition] = useState(0)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const handleScroll = () => {
		const bodyScrollTop =
			document.documentElement.scrollTop || document.body.scrollTop
		setScrolled(bodyScrollTop > 75 || window.scrollY > 75)
	}

	const handleToggle = (expanded) => {
		// console.log("expanded ", expanded)
		if (expanded) {
			setScrollPosition(window.scrollY)
			document.getElementById("body").classList.add("hide-overflow")
		} else {
			document.getElementById("body").classList.remove("hide-overflow")
			window.scrollTo(0, scrollPosition)
		}
		setOpen(expanded)
	}

	const closeNav = () => {
		handleToggle(false)
		window.scrollTo(0, 0)
	}

	return (
		<Navbar
			expand="md"
			id="navbar"
			className={`${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}
			expanded={open}
			onToggle={handleToggle}
			// collapseOnSelect={true}
		>
			<Navbar.Brand>
				<Link
					to="/"
					id="navbar-brand"
					onClick={() => {
						window.scrollTo(0, 0)
					}}
				>
					Hilltop Embrace
				</Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbar-items-container" id="navbar-toggler">
				<div id="toggler-icon"></div>
			</Navbar.Toggle>
			<Navbar.Collapse id="navbar-items-container">
				<Nav className="ml-auto" id="navbar-items">
					<NavLink
						exact
						to="/"
						activeClassName="active"
						className="nav-link normal-nav-link"
						onClick={closeNav}
					>
						Home
					</NavLink>
					<NavLink
						to="/about"
						activeClassName="active"
						className="nav-link normal-nav-link"
						onClick={closeNav}
					>
						About
					</NavLink>
					<NavLink
						to="/events"
						activeClassName="active"
						className="nav-link normal-nav-link"
						onClick={closeNav}
					>
						Events
					</NavLink>
					<NavLink
						to="/contact"
						activeClassName="active"
						className="nav-link normal-nav-link"
						onClick={closeNav}
					>
						Contact
					</NavLink>
					<Nav.Link
						href="https://instagram.com"
						className="nav-link instagram-nav-link"
						onClick={closeNav}
					>
						<IoLogoInstagram />
					</Nav.Link>
					<StyledLink
						to="/donate"
						className="donate-nav-link"
						onClick={closeNav}
					>
						Donate
					</StyledLink>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

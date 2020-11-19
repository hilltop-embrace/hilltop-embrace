import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect, useState } from "react"
import { SketchPicker } from "react-color"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "./App.scss"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { GlobalStyle } from "./GlobalTheme"
import About from "./pages/About"
import Contact from "./pages/Contact"
import DonateComingSoon from "./pages/DonateComingSoon"
import Events from "./pages/Events"
import Home from "./pages/Home"

function App() {
	const [primaryColor, setPrimaryColor] = useState(
		localStorage.getItem("primary") || "#FEDFBF"
	)
	const [secondaryColor, setSecondaryColor] = useState(
		localStorage.getItem("secondary") || "#1E89D9"
	)
	const [black, setBlack] = useState(localStorage.getItem("black") || "#4B4B4B")
	const [white, setWhite] = useState(localStorage.getItem("white") || "#FCFCFC")
	const [selected, setSelected] = useState("primary")

	useEffect(() => {
		localStorage.setItem("primary", primaryColor)
	}, [primaryColor])

	useEffect(() => {
		localStorage.setItem("secondary", secondaryColor)
	}, [secondaryColor])

	useEffect(() => {
		localStorage.setItem("black", black)
	}, [black])

	useEffect(() => {
		localStorage.setItem("white", white)
	}, [white])

	return (
		<div id="body" style={{ height: "100vh" }}>
			<GlobalStyle
				primaryColor={primaryColor}
				secondaryColor={secondaryColor}
				black={black}
				white={white}
			/>
			<Router>
				<Header />
				<div
					style={{
						position: "fixed",
						top: 200,
						right: 0,
						zIndex: 200000,
					}}
				>
					<SketchPicker
						color={
							selected === "primary"
								? primaryColor
								: selected === "secondary"
								? secondaryColor
								: selected === "black"
								? black
								: selected === "white"
								? white
								: primaryColor
						}
						onChange={(color) => {
							if (selected === "primary") {
								setPrimaryColor(color.hex)
							} else if (selected === "secondary") {
								setSecondaryColor(color.hex)
							} else if (selected === "black") {
								setBlack(color.hex)
							} else if (selected === "white") {
								setWhite(color.hex)
							} else {
								setPrimaryColor(color.hex)
							}
						}}
					/>
					<div
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							marginTop: 12,
						}}
					>
						<button
							onClick={() => setSelected("primary")}
							style={{
								background: selected === "primary" ? "black" : "lightgrey",
								color: selected === "primary" ? "white" : "black",
								width: 90,
							}}
						>
							primary
						</button>

						<button
							onClick={() => setSelected("secondary")}
							style={{
								background: selected === "secondary" ? "black" : "lightgrey",
								color: selected === "secondary" ? "white" : "black",
								width: 90,
							}}
						>
							secondary
						</button>
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							marginTop: 12,
						}}
					>
						<button
							onClick={() => setSelected("black")}
							style={{
								background: selected === "black" ? "black" : "lightgrey",
								color: selected === "black" ? "white" : "black",
								width: 90,
							}}
						>
							black
						</button>

						<button
							onClick={() => setSelected("white")}
							style={{
								background: selected === "white" ? "black" : "lightgrey",
								color: selected === "white" ? "white" : "black",
								width: 90,
							}}
						>
							white
						</button>
					</div>
				</div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/donate" component={DonateComingSoon} />
					<Route exact path="/events" component={Events} />
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App

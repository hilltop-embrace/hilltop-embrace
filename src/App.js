import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css"

import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import About from "./pages/About"
import Contact from "./pages/Contact"
import Donate from "./pages/Donate"
import DonateComingSoon from "./pages/DonateComingSoon"
import Events from "./pages/Events"
import Footer from "./components/Footer"
import { GlobalStyle } from "./GlobalTheme"
import Header from "./components/Header"
import Home from "./pages/Home"
import React from "react"

function App() {
	return (
		<div id="body" style={{ height: "100vh" }}>
			<GlobalStyle />
			<Router>
				<Header />
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

import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Donate from "./pages/Donate"
import Events from "./pages/Events"
import { GlobalStyle } from "./GlobalTheme"
import "./App.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "./components/Footer"
import Header from "./components/Header"

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
					<Route exact path="/donate" component={Donate} />
					<Route exact path="/events" component={Events} />
				</Switch>
				<Footer />
			</Router>
		</div>
	)
}

export default App

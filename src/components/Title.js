import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import React from "react"

export default function Title({ subtitle }) {
	return (
		<Helmet>
			<title>{subtitle ? "" + subtitle + " — " : ""}Hilltop Embrace</title>
			<link rel="icon" type="image/png" href="../assets/images/logo.png" />
		</Helmet>
	)
}

Title.propTypes = {
	subtitle: PropTypes.string,
}

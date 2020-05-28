import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

export default function Title({ subtitle }) {
	return (
		<Helmet>
			<title>{subtitle ? "" + subtitle + " — " : ""}Hilltop Embrace</title>
			{/* add favicon and description */}
		</Helmet>
	)
}

Title.propTypes = {
	subtitle: PropTypes.string,
}

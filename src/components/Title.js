import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

export default function Title({ subtitle }) {
	console.log(subtitle)

	return (
		<Helmet>
			<title>{subtitle ? "" + subtitle + " — " : ""}Hilltop Embrace</title>
		</Helmet>
	)
}

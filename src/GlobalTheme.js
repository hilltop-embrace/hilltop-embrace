import { createGlobalStyle } from "styled-components"

require("typeface-source-sans-pro")

export const GlobalStyle = createGlobalStyle`

	:root {
		--primary: #C79288;
		--secondary: #889fc7;
		--black: #111111;
		--white: #fcfcfc;
	}
	
	body {
		font-family: "Source Sans Pro", serif;
		font-weight: 400;
		color: var(--black);
		background-color: var(--white);
	}

	.nav-padding {
		padding-top: 100px;
		padding-bottom: 2rem;
	}

	.mb-container {
		margin-bottom: 2rem;
	}


`

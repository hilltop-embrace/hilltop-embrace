import { createGlobalStyle } from "styled-components"
require("typeface-cormorant-garamond")

export const GlobalStyle = createGlobalStyle`

	:root {
		--tan: #C79288;
		/* --blue: #1E89D9; */
		--blue: #889fc7;
		--black: #111111;
		--white: #f9f9f9;
	}
	
	body {
		font-family: "Cormorant Garamond", serif;
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

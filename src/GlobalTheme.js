import { createGlobalStyle } from "styled-components"

require("typeface-source-sans-pro")

export const GlobalStyle = createGlobalStyle`

	:root {
		--primary: #FEDFBF;
		--secondary: #1E89D9;
		--black: #4B4B4B;
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

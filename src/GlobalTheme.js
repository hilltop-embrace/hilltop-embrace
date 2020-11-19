import { createGlobalStyle } from "styled-components"

require("typeface-source-sans-pro")

export const GlobalStyle = createGlobalStyle`

	:root {
		--primary: ${(props) => props.primaryColor}; //#FEDFBF
		--secondary:${(props) => props.secondaryColor};// #1E89D9
		--black: ${(props) => props.black}; //#4B4B4B
		--white: ${(props) => props.white};//#fcfcfc
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

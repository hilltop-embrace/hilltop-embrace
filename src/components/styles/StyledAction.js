import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

const tanStyle = css`
	background-color: var(--tan);
	opacity: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	/* padding: 18px 30px; */
	width: 133px;
	height: 60px;
	font-size: 1.25rem;
	font-weight: 500;
	color: var(--white);
	border: none;
	transition: opacity 0.3s linear, transform 0.3s linear;
	&:hover,
	&:focus {
		color: var(--white);
		opacity: 0.8;
		text-decoration: none;
	}
	&:active {
		transform: translateY(3px);
	}
	@media screen and (max-width: 768px) {
		font-size: 1rem;
	}
`
export const StyledLink = styled(Link)`
	${tanStyle}
`

export const StyledButton = styled.button`
	${tanStyle}
`

export const StyledAnchor = styled.a`
	${tanStyle}
`

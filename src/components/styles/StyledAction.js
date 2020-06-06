import styled, { css } from "styled-components"

import { Link } from "react-router-dom"

const style = css`
	background-color: transparent;
	opacity: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 1000px;
	width: 150px;
	height: 50px;
	font-size: 1.25rem;
	font-weight: 500;
	color: var(--primary);
	border: 1px solid var(--primary);
	transition: all 0.3s linear;
	&:hover,
	&:focus {
		color: var(--white);
		background-color: var(--primary);
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
	${style}
`

export const StyledButton = styled.button`
	${style}
`

export const StyledAnchor = styled.a`
	${style}
`

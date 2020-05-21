import styled from "styled-components"
import { Container } from "react-bootstrap"

export const FluidContainer = styled(Container)`
	position: relative;
	z-index: 99;
	background: var(--white);
	padding-top: 60px;
	padding-bottom: 30px;
	@media screen and (max-width: 767px) {
		padding-top: 30px;
	}
`

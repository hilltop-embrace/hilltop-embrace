import React from "react"
import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`

const Loading = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 2px solid var(--black);
	border-left: 2px solid var(--tan);
	border-radius: 50%;
	width: 80px;
	height: 80px;
	animation: ${rotate} 1s linear infinite;
`

export default function Loader({ loaded, height }) {
	return (
		<div
			className="loader-container"
			style={{
				width: "100%",
				height: loaded ? 0 : height,
				opacity: loaded ? 0 : 1,
				transition: "opacity 1s",
			}}
		>
			<Loading />
		</div>
	)
}

import { SITE_NAME } from "@/constants"
import { SUBTITLE } from "@/content"
import { Box, Container, Typography } from "@material-ui/core"
import Image from "next/image"
import { Background, Parallax } from "react-parallax"
import useLandingStyles from "./Landing.styles"

interface LandingProps {
	imgBase64: string
	imgSrc: string
}

const Landing: React.FC<LandingProps> = ({ imgBase64, imgSrc }) => {
	const classes = useLandingStyles()

	return (
		<Parallax
			strength={400}
			className={classes.root}
			contentClassName={classes.content}
		>
			<Background>
				<img
					aria-hidden="true"
					alt={SITE_NAME}
					src={imgBase64}
					className={classes.blurredImage}
				/>
				<Image
					src={imgSrc}
					alt={SITE_NAME}
					title={SITE_NAME}
					quality={30}
					layout="fill"
					objectFit="cover"
					objectPosition="center center"
					priority
				/>
			</Background>
			<Container maxWidth="md">
				<Box
					component="main"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					width="100%"
					height="100%"
				>
					<Typography variant="h1" className={classes.title}>
						{SITE_NAME}
					</Typography>
					<Typography variant="h2" className={classes.subtitle}>
						{SUBTITLE}
					</Typography>
				</Box>
			</Container>
		</Parallax>
	)
}

export default Landing

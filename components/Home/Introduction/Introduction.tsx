import { ContentContainer } from "@/components/Layout"
import { Content, Header, Hyperlink } from "@/components/Typography"
import { WHAT_WE_DO } from "@/content"
import { Button, Grid, Typography } from "@material-ui/core"
import Link from "next/link"
import ReactPlayer from "react-player/file"
import useIntroductionStyles from "./Introduction.styles"

const Introduction: React.FC = () => {
	const classes = useIntroductionStyles()

	return (
		<ContentContainer>
			<Grid item xs={12}>
				<Header>What We Do</Header>
				<Content>
					{WHAT_WE_DO.map((paragraph, index) => (
						<Typography variant="body1" key={`what-we-do-${index}`}>
							{paragraph}
						</Typography>
					))}
					<Link href="/about" passHref>
						<Button variant="outlined" color="secondary">
							Learn More
						</Button>
					</Link>
				</Content>
			</Grid>
			<Grid item xs={12} md={6}>
				<Header>What We're Up To</Header>
				<Content>
					<Typography variant="body1">
						Check out{" "}
						<Hyperlink href="/media/newletters/Newsletter 1.pdf">
							Volume 1 Issue 1
						</Hyperlink>{" "}
						of our newsletter!
					</Typography>
				</Content>
			</Grid>
			<Grid item xs={12} md={6}>
				<Header>Launch Video</Header>
				<Content>
					<ReactPlayer
						url="/media/launch.mov"
						controls
						width="100%"
						height="auto"
					/>
				</Content>
			</Grid>
		</ContentContainer>
	)
}

export default Introduction

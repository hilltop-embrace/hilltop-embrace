import { HeroLayout } from "@/components/Layout"
import { Content, Header, Hyperlink } from "@/components/Typography"
import { EMAIL_ADDRESS } from "@/constants"
import { ABOUT_ITEMS, HOW_YOU_CAN_HELP_ITEMS } from "@/content"
import { Grid, Typography } from "@material-ui/core"
import Link from "next/link"

const AboutPage: React.FC = () => {
	return (
		<HeroLayout title="About Us">
			{ABOUT_ITEMS.map((aboutItem, aboutItemIndex) => (
				<Grid item xs={12} key={`about-item-${aboutItemIndex}`}>
					<Header>{aboutItem.title}</Header>
					<Content>
						{aboutItem.paragraphs.map((paragraph, paragraphIndex) => (
							<Typography
								variant="body1"
								key={`about-item-${aboutItemIndex}-paragraph-${paragraphIndex}`}
							>
								{paragraph}
							</Typography>
						))}
					</Content>
				</Grid>
			))}
			<Grid item xs={12}>
				<Header>How You Can Help</Header>
				<Content>
					<Typography variant="body1">
						We are currently taking the following items for donation:
					</Typography>
					<Grid container spacing={1} component="ul">
						{HOW_YOU_CAN_HELP_ITEMS.map((item, index) => (
							<Grid
								item
								xs={12}
								md={6}
								component="li"
								key={`how-you-can-help-item-${index}`}
							>
								<Typography variant="body1">{item}</Typography>
							</Grid>
						))}
					</Grid>
					<Typography variant="body1">
						You can also support us financially:
					</Typography>
					<Typography variant="body1">
						We have a “one-time” donation option and a “recurring” option. All
						money collected will be used for the homeless community and detailed
						financial spendings will be updated accordingly via on our website.
					</Typography>
					<Typography variant="body1">
						If you would like to volunteer or collaborate please see our{" "}
						<Link href="/events" passHref>
							<Hyperlink>events</Hyperlink>
						</Link>{" "}
						page or contact us at{" "}
						<Hyperlink href={`mailto:${EMAIL_ADDRESS}`}>
							HilltopEmbrace@gmail.com
						</Hyperlink>
						. Thank you!
					</Typography>
				</Content>
			</Grid>
		</HeroLayout>
	)
}

export default AboutPage

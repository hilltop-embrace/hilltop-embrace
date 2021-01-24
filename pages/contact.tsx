import { ContactForm } from "@/components/Contact"
import { HeroLayout } from "@/components/Layout"
import { Header, Hyperlink } from "@/components/Typography"
import { ADDRESS, EMAIL_ADDRESS } from "@/constants"
import { Grid, Typography } from "@material-ui/core"

const ContactPage: React.FC = () => {
	return (
		<HeroLayout title="Contact Us">
			<Grid item xs={12} md={6}>
				<Header>Send Us a Message</Header>
				<ContactForm />
			</Grid>
			<Grid item xs={12} md={6} container spacing={6} alignContent="flex-start">
				<Grid item xs={12} component="section">
					<Header>Email</Header>
					<Typography variant="body1">
						<Hyperlink href={`mailto:${EMAIL_ADDRESS}`}>
							{EMAIL_ADDRESS}
						</Hyperlink>
					</Typography>
				</Grid>
				<Grid item xs={12} component="section">
					<Header>Address</Header>
					{ADDRESS.map((line, index) => (
						<Typography variant="body1" key={`address-line-${index}`}>
							{line}
						</Typography>
					))}
				</Grid>
			</Grid>
		</HeroLayout>
	)
}

export default ContactPage

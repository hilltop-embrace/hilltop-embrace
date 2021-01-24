import { CONTACT_ITEMS } from "@/constants"
import { Box, Link, Typography } from "@material-ui/core"
import useFooterStyles from "./Footer.styles"

const Footer: React.FC = () => {
	const classes = useFooterStyles()

	return (
		<footer className={classes.root}>
			<Typography variant="h6" align="center" className={classes.header}>
				Contact Us
			</Typography>
			<Box
				display="flex"
				justifyContent="center"
				alignContent="center"
				flexWrap="wrap"
				width="100%"
			>
				{CONTACT_ITEMS.map((contactItem, index) => (
					<Link
						href={contactItem.url}
						target="_blank"
						rel="noopener"
						title={contactItem.title}
						className={classes.link}
						key={`footer-contact-${index}`}
					>
						{contactItem.icon}
					</Link>
				))}
			</Box>
		</footer>
	)
}

export default Footer

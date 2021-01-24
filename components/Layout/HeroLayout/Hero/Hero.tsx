import { Container, Typography } from "@material-ui/core"
import useHeroStyles from "./Hero.styles"

interface HeroProps {
	title: string
}

const Hero: React.FC<HeroProps> = ({ title }) => {
	const classes = useHeroStyles()

	return (
		<section className={classes.root}>
			<Container maxWidth="md" className={classes.container}>
				<Typography variant="h1" className={classes.title}>
					{title}
				</Typography>
			</Container>
		</section>
	)
}

export default Hero

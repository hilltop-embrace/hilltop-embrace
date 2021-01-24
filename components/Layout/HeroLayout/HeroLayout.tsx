import { NextSeo } from "next-seo"
import ContentContainer from "../ContentContainer"
import Hero from "./Hero/Hero"
import useHeroLayoutStyles from "./HeroLayout.styles"

interface HeroLayoutProps {
	title: string
}

const HeroLayout: React.FC<HeroLayoutProps> = ({ title, children }) => {
	const classes = useHeroLayoutStyles()

	return (
		<>
			<NextSeo title={title} />
			<main className={classes.root}>
				<Hero title={title} />
				<ContentContainer>{children}</ContentContainer>
			</main>
		</>
	)
}

export default HeroLayout

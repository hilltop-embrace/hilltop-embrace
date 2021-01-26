import { Container, Grid, Theme, useMediaQuery } from "@material-ui/core"
import { Children, cloneElement, ReactElement } from "react"
import useContentContainerStyles from "./ContentContainer.styles"

const ContentContainer: React.FC = ({ children }) => {
	const classes = useContentContainerStyles()
	const isMediumScreen = useMediaQuery((theme: Theme) =>
		theme.breakpoints.up("md")
	)

	const addSectionComponent = (child: ReactElement) => {
		const component = child.props.component || "section"

		return cloneElement(child, { component })
	}

	return (
		<Container maxWidth="md" className={classes.root}>
			<Grid container spacing={isMediumScreen ? 6 : 4}>
				{Children.map(children, (child) =>
					addSectionComponent(child as ReactElement)
				)}
			</Grid>
		</Container>
	)
}

export default ContentContainer

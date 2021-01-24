import { Container, Grid } from "@material-ui/core"
import { Children, cloneElement, ReactElement } from "react"
import useContentContainerStyles from "./ContentContainer.styles"

const ContentContainer: React.FC = ({ children }) => {
	const classes = useContentContainerStyles()

	const addSectionComponent = (child: ReactElement) => {
		const component = child.props.component || "section"

		return cloneElement(child, { component })
	}

	return (
		<Container maxWidth="md" className={classes.root}>
			<Grid container spacing={6}>
				{Children.map(children, (child) =>
					addSectionComponent(child as ReactElement)
				)}
			</Grid>
		</Container>
	)
}

export default ContentContainer

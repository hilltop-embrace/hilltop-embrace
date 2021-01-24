import { Container, Grid } from "@material-ui/core"
import useContentContainerStyles from "./ContentContainer.styles"

const ContentContainer: React.FC = ({ children }) => {
	const classes = useContentContainerStyles()

	return (
		<Container maxWidth="md" className={classes.root}>
			<Grid container spacing={4}>
				{children}
			</Grid>
		</Container>
	)
}

export default ContentContainer

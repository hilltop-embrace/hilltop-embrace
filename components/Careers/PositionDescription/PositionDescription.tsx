import { Position } from "@/content"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Paper, Typography } from "@material-ui/core"
import usePositionDescriptionStyles from "./PositionDescription.styles"

interface PositionDescriptionProps {
	position?: Position
}

const PositionDescription: React.FC<PositionDescriptionProps> = ({
	position,
}) => {
	const classes = usePositionDescriptionStyles()

	return (
		<Paper className={classes.root}>
			{position ? (
				<section>
					<Typography variant="h4" className={classes.title}>
						{position.title}
					</Typography>
					{documentToReactComponents(position.description)}
				</section>
			) : (
				<Typography variant="body1">Please select a position above.</Typography>
			)}
		</Paper>
	)
}

export default PositionDescription

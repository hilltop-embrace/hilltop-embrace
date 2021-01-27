import { Content } from "@/components/Typography"
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
		<Paper component="section" className={classes.root}>
			{position ? (
				<Content>
					<Typography variant="h4" className={classes.title}>
						{position.title}
					</Typography>
					{documentToReactComponents(position.description)}
				</Content>
			) : (
				<Typography variant="body1">
					Please select a position above to views its description.
				</Typography>
			)}
		</Paper>
	)
}

export default PositionDescription

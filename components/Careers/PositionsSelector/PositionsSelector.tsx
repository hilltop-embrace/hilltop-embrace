import { Position } from "@/content"
import { Box, Button } from "@material-ui/core"
import clsx from "clsx"
import usePositionsSelectorStyles from "./PositionsSelector.styles"

interface PositionsSelectorProps {
	positions: Position[]
	selectedPosition?: Position
	updateSelectedPosition: (position: Position) => void
}

const PositionsSelector: React.FC<PositionsSelectorProps> = ({
	positions,
	selectedPosition,
	updateSelectedPosition,
	...props
}) => {
	const classes = usePositionsSelectorStyles()

	return (
		<Box
			display="flex"
			justifyContent="space-evenly"
			alignContent="center"
			flexWrap="wrap"
			width="100%"
			{...props}
		>
			{positions.map((position, index) => (
				<Button
					onClick={() => updateSelectedPosition(position)}
					color={
						position.title === selectedPosition?.title ? "primary" : "default"
					}
					variant="outlined"
					className={clsx(
						classes.button,
						position.title === selectedPosition?.title && classes.activeButton
					)}
					key={`position-${index}`}
				>
					{position.title}
				</Button>
			))}
		</Box>
	)
}

export default PositionsSelector

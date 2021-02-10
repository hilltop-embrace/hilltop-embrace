import { PositionDescription, PositionsSelector } from "@/components/Careers"
import { HeroLayout } from "@/components/Layout"
import { Content, Header } from "@/components/Typography"
import { Position } from "@/content"
import { fetchPositions } from "@/utils"
import { Grid, Typography } from "@material-ui/core"
import { GetStaticProps } from "next"
import { useState } from "react"

interface CareersPageProps {
	positions: Position[]
}

const CareersPage: React.FC<CareersPageProps> = ({ positions }) => {
	const [selectedPosition, setSelectedPosition] = useState<Position>()

	const updateSelectedPosition = (position: Position) => {
		setSelectedPosition(position)
	}

	return (
		<HeroLayout title="Careers">
			<Grid item xs={12}>
				<Header>Join the Team</Header>
				<Content>
					<Typography variant="body1">
						Currently the following positions are open:
					</Typography>
					<PositionsSelector
						positions={positions}
						selectedPosition={selectedPosition}
						updateSelectedPosition={updateSelectedPosition}
					/>
					<PositionDescription position={selectedPosition} />
				</Content>
			</Grid>
		</HeroLayout>
	)
}

export default CareersPage

export const getStaticProps: GetStaticProps = async () => {
	const positionsRes = await fetchPositions()
	const positions: Position[] = await positionsRes.map(
		(position: { fields: Position }) => position.fields
	)
	return {
		props: {
			positions,
		},
	}
}

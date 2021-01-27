import { HeroLayout } from "@/components/Layout"
import { Grid, Typography } from "@material-ui/core"

const DonatePage: React.FC = () => {
	return (
		<HeroLayout title="Donate">
			<Grid item xs={12}>
				<Typography variant="h3" color="textSecondary" align="center">
					Coming soon!
				</Typography>
			</Grid>
		</HeroLayout>
	)
}

export default DonatePage

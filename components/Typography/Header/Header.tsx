import { Typography } from "@material-ui/core"
import useHeaderStyles from "./Header.styles"

const Header: React.FC = ({ children }) => {
	const classes = useHeaderStyles()

	return (
		<>
			<Typography variant="h3" className={classes.header}>
				{children}
			</Typography>
			<hr className={classes.divider} />
		</>
	)
}

export default Header

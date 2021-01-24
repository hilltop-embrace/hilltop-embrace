import { NAV_ITEMS } from "@/constants"
import { Box, Link as MuiLink } from "@material-ui/core"
import clsx from "clsx"
import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import useNavMenuStyles from "./NavMenu.styles"

interface NavMenuProps {
	closeDrawer: () => void
}

const NavMenu: React.FC<NavMenuProps> = ({ closeDrawer }) => {
	const router = useRouter()
	const classes = useNavMenuStyles()

	return (
		<Box
			component="nav"
			display="flex"
			alignItems="center"
			height="100%"
			className={classes.root}
		>
			{NAV_ITEMS.map((navItem, index) => (
				<Link href={navItem.path} key={`nav-item-${index}`}>
					<MuiLink
						component="button"
						onClick={closeDrawer}
						className={clsx(
							classes.navItem,
							navItem.isCta && classes.navItemCta,
							router.pathname === navItem.path &&
								!navItem.isCta &&
								classes.navItemActive
						)}
					>
						{navItem.title}
					</MuiLink>
				</Link>
			))}
		</Box>
	)
}

export default NavMenu

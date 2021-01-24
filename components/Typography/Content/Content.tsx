import { Children, cloneElement, ReactElement } from "react"
import useContentStyles from "./Content.styles"

const Content: React.FC = ({ children }) => {
	const classes = useContentStyles()

	const addMarginBottom = (child: ReactElement) => {
		const className = `${child.props.className || ""} ${classes.item}`

		return cloneElement(child, { className })
	}

	return (
		<section className={classes.root}>
			{Children.map(children, (child) =>
				addMarginBottom(child as ReactElement)
			)}
		</section>
	)
}

export default Content

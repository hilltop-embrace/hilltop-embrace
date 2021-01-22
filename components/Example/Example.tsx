import { EXAMPLE_CONTENT } from "@/content"
import useExampleStyles from "./Example.styles"

const Example: React.FC = () => {
	const classes = useExampleStyles()

	return <>{EXAMPLE_CONTENT.join(" ")}</>
}

export default Example

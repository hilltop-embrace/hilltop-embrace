import Example from "@/components/Example"
import { SITE_NAME } from "@/constants"
import { NextSeo } from "next-seo"

const IndexPage: React.FC = () => {
	return (
		<>
			<NextSeo titleTemplate="%s" title={SITE_NAME} />
			<Example />
		</>
	)
}

export default IndexPage

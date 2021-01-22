import { SITE_NAME } from "@/constants"
import { NextSeo } from "next-seo"

const IndexPage: React.FC = () => {
	return (
		<>
			<NextSeo titleTemplate="%s" title={SITE_NAME} />
		</>
	)
}

export default IndexPage

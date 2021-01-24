import { Introduction, Landing } from "@/components/Home"
import { SITE_NAME } from "@/constants"
import { getBase64 } from "@plaiceholder/base64"
import { getImage } from "@plaiceholder/next"
import { GetStaticProps } from "next"
import { NextSeo } from "next-seo"
export const getStaticProps: GetStaticProps = async () => {
	const imgSrc = "/images/landing.jpg"
	const img = await getImage(imgSrc)
	const imgBase64 = await getBase64(img)

	return {
		props: {
			imgBase64,
			imgSrc,
		},
	}
}

interface IndexPageProps {
	imgBase64: string
	imgSrc: string
}

const IndexPage: React.FC<IndexPageProps> = ({ imgBase64, imgSrc }) => {
	return (
		<>
			<NextSeo titleTemplate="%s" title={SITE_NAME} />
			<Landing imgBase64={imgBase64} imgSrc={imgSrc} />
			<Introduction />
		</>
	)
}

export default IndexPage

import { SITE_NAME, SITE_URL } from "./constants"

export default {
	titleTemplate: `%s — ${SITE_NAME}`,
	description: SITE_NAME,
	canonical: SITE_URL,
	openGraph: {
		title: SITE_NAME,
		description: SITE_NAME,
		type: "website",
		locale: "en_IE",
		url: SITE_URL,
		site_name: SITE_NAME,
		images: [
			{
				url: `${SITE_URL}/images/logo.png`,
				width: 800,
				height: 600,
				alt: SITE_NAME,
			},
		],
	},
	twitter: {
		cardType: "summary_large_image",
	},
}

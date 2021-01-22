import { ServerStyleSheets } from "@material-ui/core/styles"
import Document, { Head, Html, Main, NextScript } from "next/document"
import { Children } from "react"

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/inter.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link rel="stylesheet" href="/fonts/fonts.css" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/favicons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicons/favicon-16x16.png"
					/>
					<link rel="manifest" href="/favicons/site.webmanifest" />
					<link
						rel="mask-icon"
						href="/favicons/safari-pinned-tab.svg"
						color="#34926e"
					/>
					<link rel="shortcut icon" href="/favicons/favicon.ico" />
					<meta name="apple-mobile-web-app-title" content="Rumeet Goradia" />
					<meta name="application-name" content="Rumeet Goradia" />
					<meta name="msapplication-TileColor" content="#00a300" />
					<meta
						name="msapplication-config"
						content="/favicons/browserconfig.xml"
					/>
					<meta name="theme-color" content="#111820" />
					<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const sheets = new ServerStyleSheets()
	const originalRenderPage = ctx.renderPage

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		})

	const initialProps = await Document.getInitialProps(ctx)

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [
			...Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
		],
	}
}

export default MyDocument

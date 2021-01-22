import theme from "@/theme"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import { useEffect } from "react"
import SEO from "../next-seo.config"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles)
		}
	}, [])

	return (
		<>
			<DefaultSeo {...SEO} />
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default App

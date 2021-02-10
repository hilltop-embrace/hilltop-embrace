import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import NewsletterDialog from "@/components/NewsletterDialog"
import { REGISTERED_COOKIE } from "@/constants"
import theme from "@/theme"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { DefaultSeo } from "next-seo"
import { AppProps } from "next/app"
import { useEffect, useState } from "react"
import "react-big-calendar/lib/sass/styles.scss"
import SEO from "../next-seo.config"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	const [showNewsletterDialog, setShowNewsletterDialog] = useState<boolean>(
		false
	)

	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles) {
			jssStyles.parentElement?.removeChild(jssStyles)
		}
	}, [])

	useEffect(() => {
		console.log(window.localStorage.getItem(REGISTERED_COOKIE))
		setShowNewsletterDialog(!window.localStorage.getItem(REGISTERED_COOKIE))
	}, [])

	const closeNewsletterDialog = () => {
		setShowNewsletterDialog(false)
	}

	return (
		<>
			<DefaultSeo {...SEO} />
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<NewsletterDialog
					open={showNewsletterDialog}
					onClose={closeNewsletterDialog}
				/>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</>
	)
}

export default App

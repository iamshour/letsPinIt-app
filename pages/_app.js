import Head from "next/head"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>LetsPinIt app</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp

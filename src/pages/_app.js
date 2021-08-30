import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import Head from "next/head"
import PropTypes from "prop-types"
import React from "react"
import { Provider } from 'react-redux'
// import 'src/styles/about.css'

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import 'src/styles/about.css'
import store from '../redux/store'
import Auth from "../shared/Auth/Auth"
import Layout from "../shared/Layout/Layout"
//Theme Override for Material UI
import theme from "../shared/_Theme/theme"
// import '../styles/about.css'
import '../styles/common.css'
import "../styles/globals.css"

export default function MyApp(props) {
	const { Component, pageProps } = props

	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector("#jss-server-side")
		if (jssStyles) {
			jssStyles.parentElement.removeChild(jssStyles)
		}
	}, [])

	return (
		<React.Fragment>
			<Head>
				<link rel="shortcut icon" href="/favicon.png" />
				<title>One Education</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />

				<Provider store={store}>
					<Auth>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</Auth>
				</Provider>
			</ThemeProvider>
		</React.Fragment>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
}

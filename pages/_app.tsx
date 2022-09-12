/** @format */

import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import emailjs from '@emailjs/browser';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: 'AlumniSansInlineOne'
	}
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Portfolio App</title>

				{/*	<script
					type='text/javascript'
					src='https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'></script>
				<script type='text/javascript'>
					(function() {emailjs.init('CztAJ0ekX8SI7V-cN')})();
	</script>*/}
			</Head>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;

/** @format */

import '../styles/globals.css';
import Head from 'next/head';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: 'AlumniSansInlineOne'
	}
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One&family=Poppins:wght@200&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;

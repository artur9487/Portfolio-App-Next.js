/** @format */

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<title>Portfolio App</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<link rel='preconnect' href='https://fonts.googleapis.com'></link>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Alumni+Sans+Inline+One&family=Poppins:wght@200&display=swap'
					rel='stylesheet'></link>
				<link
					href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
					rel='stylesheet'
					crossOrigin='anonymous'
					integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

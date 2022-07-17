/** @format */

import FirstSection from '../components/First/FirstSection';
import styles from '/styles/Home.module.scss';
import SecondSection from '../components/Second/SecondSection';
import ThirdSection from '../components/Third/ThirdSection';
import { request, gql } from 'graphql-request';
import FourthSection from '../components/Fourth/FourthSection';
import Slide from '../components/LayoutComp/Slide';
import SideBar from '../components/LayoutComp/SideBar';
import { useRef } from 'react';
import Layout from '../components/LayoutComp/Layout';
import IntroSection from '../components/Intro/IntroSection';
import { useMediaQuery } from '@mui/material';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import FooterSection from '../components/LayoutComp/FooterSection';
import MainLayout from '../components/LayoutComp/MainLayout';

const Home = ({ endResult }) => {
	const matches = useMediaQuery('(max-width:1200px)');
	const matches2 = useMediaQuery('(max-width:900px)');
	const matches3 = useMediaQuery('(max-width:600px)');
	const ref0 = useRef(null);
	const ref1 = useRef(null);
	const ref2 = useRef(null);
	const ref3 = useRef(null);
	const ref4 = useRef(null);

	const theme = createTheme({
		typography: {
			fontFamily: [
				'Nunito',
				'Roboto',
				'"Helvetica Neue"',
				'Arial',
				'sans-serif',
				'Alumni Sans Inline One',
				'Poppins'
			].join(',')
		}
	});

	return (
		<>
			<ThemeProvider theme={theme}>
				<SideBar
					ref0={ref0}
					ref1={ref1}
					ref2={ref2}
					ref3={ref3}
					ref4={ref4}
					matches3={matches3}
				/>
				<IntroSection
					refe={ref0}
					matches={matches}
					matches2={matches2}
					matches3={matches3}
				/>
				<MainLayout>
					<Layout
						matches={matches}
						matches3={matches3}
						refe={ref1}
						title='About Me'>
						<Slide slide={styles.slide_left}>
							<FirstSection matches={matches} matches3={matches3} />
						</Slide>
					</Layout>
					<Layout
						matches={matches}
						refe={ref2}
						matches3={matches3}
						title='My Tech Stack'>
						<Slide slide={styles.slide_right}>
							<SecondSection
								matches={matches}
								matches2={matches2}
								matches3={matches3}
							/>
						</Slide>
					</Layout>
					<Layout
						matches={matches}
						matches3={matches3}
						refe={ref3}
						title='My Projects'>
						<ThirdSection
							result={endResult}
							matches={matches}
							matches3={matches3}
						/>
					</Layout>
					<Layout
						matches={matches}
						refe={ref4}
						matches3={matches3}
						title='Contact'>
						<Slide slide={styles.slide_left}>
							<FourthSection matches3={matches3} />
						</Slide>
					</Layout>
					<FooterSection matches3={matches3} />
				</MainLayout>
			</ThemeProvider>
		</>
	);
};

export async function getServerSideProps() {
	const API2 = `https://api-eu-central-1.graphcms.com/v2/${process.env.API}/master`;
	const query = gql`
		query MyQuery {
			projectssConnection {
				edges {
					node {
						projectName
						id
						photo0 {
							url
						}
						photo1 {
							url
						}
						photo2 {
							url
						}
						stack
						description
						technology
						repo
						projLink
					}
				}
			}
		}
	`;

	const result = await request(API2, query);
	const endResult = result.projectssConnection.edges;

	return {
		props: { endResult }
	};
}
export default Home;

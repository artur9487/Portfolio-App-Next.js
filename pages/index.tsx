/** @format */

import FirstSection from '../components/First/FirstSection';
import styles from '/styles/Home.module.scss';
import SecondSection from '../components/Second/SecondSection';
import ThirdSection from '../components/Third/ThirdSection';
import { request, gql } from 'graphql-request';
import FourthSection from '../components/Fourth/FourthSection';
import SideBar from '../components/LayoutComp/SideBar';
import { LegacyRef, MutableRefObject, useRef } from 'react';
import Layout from '../components/LayoutComp/Layout';
import IntroSection from '../components/Intro/IntroSection';
import { BoxTypeMap, useMediaQuery } from '@mui/material';
import FooterSection from '../components/LayoutComp/FooterSection';
import MainLayout from '../components/LayoutComp/MainLayout';
import Head from 'next/head';
import { Box } from '@mui/material';
import React from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { projectPros_schema } from '../interfaceGlobalSchemas';

const Home: React.FC<projectPros_schema> = ({ projectData }) => {
	const maxWidth1200 = useMediaQuery<string>('(max-width:1200px)');
	const maxWidth900 = useMediaQuery<string>('(max-width:900px)');
	const maxWidth600 = useMediaQuery<string>('(max-width:600px)');
	const introSectionRef = useRef<null | MutableRefObject<
		LegacyRef<HTMLElement>
	>>(null);
	const firstSectionRef = useRef<null | MutableRefObject<
		OverridableComponent<BoxTypeMap<{}, 'div'>>
	>>(null);
	const secondSectionRef = useRef<null | MutableRefObject<
		OverridableComponent<BoxTypeMap<{}, 'div'>>
	>>(null);
	const thirdSectionRef = useRef<null | MutableRefObject<
		OverridableComponent<BoxTypeMap<{}, 'div'>>
	>>(null);
	const fourthSectionRef = useRef<null | MutableRefObject<
		OverridableComponent<BoxTypeMap<{}, 'div'>>
	>>(null);

	return (
		<>
			<Box className={styles.mainBox}>
				<SideBar
					introSectionRef={introSectionRef}
					firstSectionRef={firstSectionRef}
					secondSectionRef={secondSectionRef}
					thirdSectionRef={thirdSectionRef}
					fourthSectionRef={fourthSectionRef}
					maxWidth600={maxWidth600}
				/>
				<IntroSection
					reference={introSectionRef}
					maxWidth1200={maxWidth1200}
					maxWidth900={maxWidth900}
					maxWidth600={maxWidth600}
				/>
				<MainLayout>
					<Layout
						style={styles.divider}
						maxWidth1200={maxWidth1200}
						maxWidth600={maxWidth600}
						reference={firstSectionRef}
						title='About Me'>
						<FirstSection
							maxWidth1200={maxWidth1200}
							maxWidth600={maxWidth600}
						/>
					</Layout>
					<Layout
						style={styles.divider}
						maxWidth1200={maxWidth1200}
						reference={secondSectionRef}
						maxWidth600={maxWidth600}
						title='My Tech Stack'>
						<SecondSection
							maxWidth1200={maxWidth1200}
							maxWidth900={maxWidth900}
							maxWidth600={maxWidth600}
						/>
					</Layout>
					<Layout
						style={styles.divider}
						maxWidth1200={maxWidth1200}
						maxWidth600={maxWidth600}
						reference={thirdSectionRef}
						title='My Projects'>
						<ThirdSection
							projectData={projectData}
							maxWidth1200={maxWidth1200}
							maxWidth600={maxWidth600}
						/>
					</Layout>
					<Layout
						style={styles.divider}
						maxWidth1200={maxWidth1200}
						reference={fourthSectionRef}
						maxWidth600={maxWidth600}
						title='Contact'>
						<FourthSection
							maxWidth600={maxWidth600}
							maxWidth1200={maxWidth1200}
							maxWidth900={maxWidth900}
						/>
					</Layout>
					<FooterSection maxWidth600={maxWidth600} />
				</MainLayout>
			</Box>
		</>
	);
};

export async function getServerSideProps() {
	const URL = `https://api-eu-central-1.graphcms.com/v2/${process.env.API}/master`;
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

	const result = await request(URL, query);
	const projectData = result.projectssConnection.edges;

	return {
		props: { projectData }
	};
}
export default Home;

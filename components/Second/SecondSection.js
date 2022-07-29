/** @format */
import { useEffect, useState, useRef, createRef } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/material';
import TechCard from '../Third/TechCard';
import styles from '/styles/Home.module.scss';
import VisibilitySensor from 'react-visibility-sensor';
import styles2 from '../../styles/Second.module.scss';
import TechBig from './TechBig';
import TechSmall from './TechSmall';

const sideStack = {
	tech: ['React Nav', 'Firebase', 'Git', 'GraphQl', 'Redux', 'Redux-Saga'],
	uppBack: 'linear-gradient(rgb(255, 0, 0),rgb(255, 153, 153))',
	circleBack: 'linear-gradient(rgb(255, 153, 153), rgb(255, 0, 0))',
	title: 'Libraries and others'
};
const mainStack = {
	tech: [
		'HTML',
		'Javascript',
		'Next.js',
		'React Native',
		'React.js',
		'Express.js'
	],
	uppBack: 'linear-gradient(rgb(0, 102, 255),rgb(153, 194, 255))',
	circleBack: 'linear-gradient(rgb(153, 194, 255), rgb(0, 102, 255))',
	title: 'Main Stack'
};
const styleStack = {
	tech: ['CSS', 'Sass', 'Styled-Comp', 'Material UI'],
	uppBack: 'linear-gradient(rgb(64, 191, 64),rgb(179, 230, 179))',
	circleBack: 'linear-gradient(rgb(179, 230, 179), rgb(64, 191, 64))',
	title: 'Styling Stack'
};

const techArr = mainStack.tech.concat(sideStack.tech, styleStack.tech);

const SecondSection = ({ matches, matches2, matches3 }) => {
	const [isVisible, setVisible] = useState(false);

	return (
		<>
			<VisibilitySensor
				className={styles.visi}
				active={isVisible ? false : true}
				partialVisibility
				onChange={(isVisiblee) => {
					setVisible(isVisiblee);
				}}>
				<Box
					className={styles.fade600}
					sx={{
						height: !matches ? '90%' : '100vh',
						width: '100%',
						mt: 12,
						position: 'relative'
					}}>
					<Box
						sx={{
							width: !matches ? '50%' : matches3 ? '90%' : '70%',
							height: !matches3 ? '50%' : '70%',
							margin: 'auto',
							position: 'relative'
						}}>
						<Box
							className={isVisible ? styles2.brackets : styles.noVis}
							sx={{
								width: !matches3 ? 90 : 45,
								position: 'absolute',
								bottom: -10,
								right: 0,
								height: !matches3 ? 10 : 5,
								background:
									'linear-gradient(45deg, rgb(90, 0, 158),rgb(144, 0, 255))'
							}}
						/>
						<Box
							className={isVisible ? styles2.brackets : styles.noVis}
							sx={{
								width: !matches3 ? 10 : 5,
								position: 'absolute',
								bottom: -10,
								right: 0,
								height: !matches3 ? 90 : 45,
								background:
									'linear-gradient(125deg, rgb(90, 0, 158),rgb(144, 0, 255))'
							}}
						/>
						<Box
							className={isVisible ? styles2.brackets : styles.noVis}
							sx={{
								width: !matches3 ? 60 : 30,
								position: 'absolute',
								top: -30,
								left: -15,
								height: !matches3 ? 10 : 5,
								background:
									'linear-gradient(45deg, rgb(90, 0, 158),rgb(144, 0, 255))'
							}}
						/>
						<Box
							className={isVisible ? styles2.brackets : styles.noVis}
							sx={{
								width: !matches3 ? 10 : 5,
								position: 'absolute',
								top: -30,
								left: -15,
								height: !matches3 ? 60 : 30,
								background:
									'linear-gradient(125deg, rgb(90, 0, 158),rgb(144, 0, 255))'
							}}
						/>
						<Grid
							rowSpacing={1}
							container
							direction='row'
							alignItems='center'
							justifyContent='center'
							sx={{
								left: 0,
								top: 0,
								width: '100%',
								height: '100%',
								opacity: !matches3 ? 0 : 1,
								position: 'absolute'
							}}>
							<TechSmall techArr={techArr} isVisible={isVisible} />
						</Grid>
						<Grid
							columnSpacing={2}
							sx={{
								width: '100%',
								height: '100%',
								opacity: matches3 ? 0 : 1,
								left: 0,
								top: 0,
								position: 'absolute'
							}}
							container>
							<TechBig
								techArr={techArr}
								matches={matches}
								matches2={matches2}
								isVisible={isVisible}
							/>
						</Grid>
					</Box>
					<Stack
						className={isVisible ? styles2.slideVis : styles.none}
						direction='column'
						justifyContent='center'
						sx={{
							height: '50%',
							widht: '100%'
						}}>
						<Box
							sx={{ width: !matches3 ? '75%' : '90%' }}
							className='slide_body'>
							<Box className={[`slider`, styles2.shadowBox]}>
								<Box className='slide-track'>
									{mainStack.tech
										.concat(sideStack.tech, styleStack.tech)
										.map((item, indx) => {
											return (
												<TechCard key={indx} techName={item} indx={indx} />
											);
										})}
									{mainStack.tech
										.concat(sideStack.tech, styleStack.tech)
										.map((item, indx) => {
											return (
												<TechCard key={indx} techName={item} indx={indx} />
											);
										})}
								</Box>
							</Box>
						</Box>
					</Stack>
				</Box>
			</VisibilitySensor>
		</>
	);
};

export default SecondSection;

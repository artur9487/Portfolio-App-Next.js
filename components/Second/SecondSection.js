/** @format */
import { useEffect, useState, useRef, createRef } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/material';
import TechCard from '../Third/TechCard';
import styles from '/styles/Home.module.scss';
import VisibilitySensor from 'react-visibility-sensor';
import styles2 from '../../styles/Second.module.scss';
import classNames from 'classnames';

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

const SecondSection = ({ matches }) => {
	const [isVisible, setVisible] = useState(false);

	const boxi = (txt, num, mar, styli, shad, type) => {
		let styli2;
		if (shad === 'up') {
			styli2 = styles2.up;
		} else if (shad === 'down') {
			styli2 = styles2.down;
		} else if (shad === 'left') {
			styli2 = styles2.left;
		} else if (shad === 'right') {
			styli2 = styles2.right;
		}

		const typo = (
			<Typography sx={{ lineHeight: '2', fontSize: 20 }}>{txt}</Typography>
		);

		let boxu;
		if (mar === 'auto') {
			boxu = (
				<Box
					className={isVisible ? styli : null}
					sx={{
						borderRadius: 2,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						bgcolor: 'rgba(78, 78, 78)',
						width: type === 'first' ? 170 : '100%',
						border: 2,
						margin: mar,
						height: '100%'
					}}>
					<Box
						className={isVisible ? styli2 : null}
						sx={{ width: '100%', height: '100%' }}>
						{typo}
					</Box>
				</Box>
			);
		} else if (mar === 'right') {
			boxu = (
				<Box
					className={isVisible ? styli : null}
					sx={{
						borderRadius: 2,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						bgcolor: 'rgba(78, 78, 78)',
						width: 170,
						border: 2,
						marginLeft: '100%',
						height: '100%',
						transform: 'translateX(-100%)'
					}}>
					<Box
						className={isVisible ? styli2 : null}
						sx={{ width: '100%', height: '100%' }}>
						{typo}
					</Box>
				</Box>
			);
		} else if (mar === 'left') {
			boxu = (
				<Box
					className={isVisible ? styli : null}
					sx={{
						borderRadius: 2,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						bgcolor: 'rgba(78, 78, 78)',
						width: 170,
						border: 2,
						marginLeft: 0,
						height: '100%'
					}}>
					<Box
						className={isVisible ? styli2 : null}
						sx={{ width: '100%', height: '100%' }}>
						{typo}
					</Box>
				</Box>
			);
		}
		return (
			<Grid
				className={styles2.styli2}
				item
				xs={num}
				spacing={3}
				sx={{
					height: 50,
					color: 'white',
					display: 'block',
					textAlign: 'center'
				}}>
				{boxu}
			</Grid>
		);
	};

	return (
		<>
			<VisibilitySensor
				className={styles.visi}
				active={isVisible ? false : true}
				partialVisibility
				onChange={(isVisiblee) => {
					setVisible(isVisiblee);
				}}>
				<Box sx={{ height: !matches ? '90%' : '100vh', width: '100%', mt: 12 }}>
					{/*d<Box
						sx={{
							width: 700,
							height: '50%',
							margin: 'auto',
							position: 'relative'
						}}>
						<Box
							className={isVisible ? styles2.brackets : styles2.bracketsInv}
							sx={{
								width: 90,
								position: 'absolute',
								bottom: 0,
								right: 0,
								height: 10,
								background:
									'linear-gradient(45deg, rgb(90, 0, 158),rgb(144, 0, 255))'
							}}
						/>
						<Box
							className={isVisible ? styles2.brackets : null}
							sx={{
								width: 10,
								position: 'absolute',
								bottom: 0,
								right: 0,
								height: 90,
								background:
									'linear-gradient(125deg, rgb(90, 0, 158),rgb(144, 0, 255))'
							}}
						/>
						<Box
							className={isVisible ? styles2.brackets : null}
							sx={{
								width: 60,
								position: 'absolute',
								top: -15,
								left: 0,
								height: 10,
								background:
									'linear-gradient(45deg, rgb(90, 0, 158),rgb(144, 0, 255))'
							}}
						/>
						<Box
							className={isVisible ? styles2.brackets : null}
							sx={{
								width: 10,
								position: 'absolute',
								top: -5,
								left: 0,
								height: 60,
								background:
									'linear-gradient(125deg, rgb(90, 0, 158),rgb(144, 0, 255))'
							}}
						/>
						<Grid
							columnSpacing={2}
							sx={{ width: '100%', height: '100%' }}
							container>
							{techArr.map((item, indx) => {
								switch (indx) {
									case 0:
										return boxi(item, 12, 'auto', styles2.forth, 'up', 'first');

									case 1:
										return boxi(item, 6, 'right', styles2.third2, 'right');
									case 2:
										return boxi(item, 6, 'left', styles2.third, 'left');

									case 3:
										return boxi(item, 4, 'right', styles2.second2, 'right');
									case 4:
										return boxi(item, 4, 'auto', styles2.second);
									case 5:
										return boxi(item, 4, 'left', styles2.second, 'left');

									case 6:
										return boxi(item, 3, 'auto', styles2.first, 'right');
									case 7:
										return boxi(item, 3, 'auto', styles2.first);
									case 8:
										return boxi(item, 3, 'auto', styles2.first);
									case 9:
										return boxi(item, 3, 'auto', styles2.first, 'left');

									case 10:
										return boxi(item, 4, 'right', styles2.second2, 'right');
									case 11:
										return boxi(item, 4, 'auto', styles2.second);
									case 12:
										return boxi(item, 4, 'left', styles2.second, 'left');

									case 13:
										return boxi(item, 6, 'right', styles2.third2, 'right');
									case 14:
										return boxi(item, 6, 'left', styles2.third, 'left');

									case 15:
										return boxi(
											item,
											12,
											'auto',
											styles2.forth,
											'down',
											'first'
										);

									default:
										break;
								}
							})}
						</Grid>
					</Box>*/}
					<Stack
						direction='column'
						justifyContent='center'
						sx={{
							height: '50%',
							widht: '100%'
						}}>
						<Box sx={{ width: '100%' }} className='slide_body'>
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

/** @format */

import { Box, Typography, Grid } from '@mui/material';
import styles2 from '../../styles/Second.module.scss';
import styles from '../../styles/Home.module.scss';

const TechFragmBig = ({
	item,
	num,
	mar,
	styli,
	shad,
	type,
	matches,
	matches2,
	isVisible
}) => {
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
		<Typography
			sx={{
				lineHeight: '2',
				fontSize: !matches ? 22 : 16,
				fontFamily: 'Alumni Sans Inline One',
				letterSpacing: 3,
				color: 'rgb(216, 214, 219)'
			}}>
			{item}
		</Typography>
	);

	let boxu;
	if (mar === 'auto') {
		boxu = (
			<Box
				className={isVisible ? styli : styles.noVis}
				sx={{
					borderRadius: 3,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					bgcolor: 'rgb(39, 37, 43, 0.5)',
					width: type === 'first' ? (!matches2 ? 170 : 100) : '100%',

					margin: mar,
					height: '100%'
				}}>
				<Box
					className={isVisible ? styli2 : styles.noVis}
					sx={{
						borderRadius: 3,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '100%',
						height: '100%'
					}}>
					{typo}
				</Box>
			</Box>
		);
	} else if (mar === 'right') {
		boxu = (
			<Box
				className={isVisible ? styli : styles.noVis}
				sx={{
					borderRadius: 3,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					bgcolor: 'rgb(39, 37, 43, 0.5)',
					width: !matches2 ? 170 : 100,
					marginLeft: '100%',
					height: '100%',
					transform: 'translateX(-100%)'
				}}>
				<Box
					className={isVisible ? styli2 : styles.noVis}
					sx={{
						borderRadius: 3,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '100%',
						height: '100%'
					}}>
					{typo}
				</Box>
			</Box>
		);
	} else if (mar === 'left') {
		boxu = (
			<Box
				className={isVisible ? styli : styles.noVis}
				sx={{
					borderRadius: 3,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					bgcolor: 'rgba(39, 37, 43, 0.5)',
					width: !matches2 ? 170 : 100,
					borderColor: 'rgb(39, 37, 43)',
					marginLeft: 0,
					height: '100%'
				}}>
				<Box
					className={isVisible ? styli2 : styles.noVis}
					sx={{
						borderRadius: 3,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '100%',
						height: '100%'
					}}>
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

const TechBig = ({ techArr, matches, matches2, isVisible }) => {
	return techArr.map((item, indx) => {
		switch (indx) {
			case 0:
				return (
					<TechFragmBig
						item={item}
						num={12}
						mar='auto'
						styli={styles2.forth}
						shad='up'
						type='first'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);

			case 1:
				return (
					<TechFragmBig
						item={item}
						num={6}
						mar='right'
						styli={styles2.third2}
						shad='right'
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);
			case 2:
				return (
					<TechFragmBig
						item={item}
						num={6}
						mar='left'
						styli={styles2.third}
						shad='left'
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);
			case 3:
				return (
					<TechFragmBig
						item={item}
						num={4}
						mar='right'
						styli={styles2.second2}
						shad='right'
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);

			case 4:
				return (
					<TechFragmBig
						item={item}
						num={4}
						mar='auto'
						styli={styles2.second}
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);

			case 5:
				return (
					<TechFragmBig
						item={item}
						num={4}
						mar='left'
						styli={styles2.second}
						shad='left'
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);

			case 6:
				return (
					<TechFragmBig
						item={item}
						num={3}
						mar='auto'
						styli={styles2.first}
						shad='right'
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);
			case 7:
				return (
					<TechFragmBig
						item={item}
						num={3}
						mar='auto'
						styli={styles2.first}
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);
			case 8:
				return (
					<TechFragmBig
						item={item}
						num={3}
						mar='auto'
						styli={styles2.first}
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);

			case 9:
				return (
					<TechFragmBig
						item={item}
						num={3}
						mar='auto'
						styli={styles2.first}
						shad='left'
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);
			case 10:
				return (
					<TechFragmBig
						item={item}
						num={4}
						mar='right'
						styli={styles2.second2}
						shad='right'
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);
			case 11:
				return (
					<TechFragmBig
						item={item}
						num={4}
						mar='auto'
						styli={styles2.second}
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);

			case 12:
				return (
					<TechFragmBig
						item={item}
						num={4}
						mar='left'
						styli={styles2.second}
						shad='left'
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);
			case 13:
				return (
					<TechFragmBig
						item={item}
						num={6}
						mar='right'
						styli={styles2.third2}
						shad='right'
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);
			case 14:
				return (
					<TechFragmBig
						item={item}
						num={6}
						mar='left'
						styli={styles2.third}
						shad='left'
						type='none'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);
			case 15:
				return (
					<TechFragmBig
						item={item}
						num={12}
						mar='auto'
						styli={styles2.forth}
						shad='down'
						type='first'
						matches={matches}
						matches2={matches2}
						isVisible={isVisible}
					/>
				);
			default:
				break;
		}
	});
};

export default TechBig;

/** @format */

import { Box, Typography, Grid } from '@mui/material';
import styles from '../../styles/Home.module.scss';
import { techBigScreenParams } from './SectionArrays';

const TechnologyFragmentComponent = ({
	item,
	gridColumns,
	marginPosition,
	positionReveal,
	shadowPosition,
	type,
	maxWidth1200,
	maxWidth900,
	isVisible
}) => {
	const backgroundColor = 'rgb(39, 37, 43, 0.5)';
	console.log(shadowPosition);

	const typographyObj = (
		<Typography
			sx={{
				lineHeight: '2',
				fontSize: !maxWidth1200 ? 22 : 16,
				letterSpacing: 3,
				color: 'rgb(216, 214, 219)'
			}}>
			{item}
		</Typography>
	);

	let technologyFragnent;
	if (marginPosition === 'auto') {
		technologyFragnent = (
			<Box
				className={isVisible ? positionReveal : styles.noVisibility}
				sx={{
					borderRadius: 3,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					bgcolor: backgroundColor,
					width: type === 'firstBig' ? (!maxWidth900 ? 170 : 100) : '100%',
					margin: marginPosition,
					height: '100%'
				}}>
				<Box
					className={isVisible ? shadowPosition : styles.noVisibility}
					sx={{
						borderRadius: 3,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '100%',
						height: '100%'
					}}>
					{typographyObj}
				</Box>
			</Box>
		);
	} else if (marginPosition === 'right') {
		technologyFragnent = (
			<Box
				className={isVisible ? positionReveal : styles.noVisibility}
				sx={{
					borderRadius: 3,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					bgcolor: backgroundColor,
					width: !maxWidth900 ? 170 : 100,
					marginLeft: '100%',
					height: '100%',
					transform: 'translateX(-100%)'
				}}>
				<Box
					className={isVisible ? shadowPosition : styles.noVisibility}
					sx={{
						borderRadius: 3,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '100%',
						height: '100%'
					}}>
					{typographyObj}
				</Box>
			</Box>
		);
	} else if (marginPosition === 'left') {
		technologyFragnent = (
			<Box
				className={isVisible ? positionReveal : styles.noVisibility}
				sx={{
					borderRadius: 3,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					bgcolor: backgroundColor,
					width: !maxWidth900 ? 170 : 100,
					borderColor: 'rgb(39, 37, 43)',
					marginLeft: 0,
					height: '100%'
				}}>
				<Box
					className={isVisible ? shadowPosition : styles.noVisibility}
					sx={{
						borderRadius: 3,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						width: '100%',
						height: '100%'
					}}>
					{typographyObj}
				</Box>
			</Box>
		);
	}
	return (
		<Grid
			item
			xs={gridColumns}
			spacing={3}
			sx={{
				height: 45,
				color: 'white',
				display: 'block',
				textAlign: 'center'
			}}>
			{technologyFragnent}
		</Grid>
	);
};

const TechBigScreen = ({
	technology,
	maxWidth1200,
	maxWidth900,
	isVisible
}) => {
	{
		return techBigScreenParams.map((item, indx) => {
			const {
				gridColumns,
				marginPosition,
				positionReveal,
				shadowPosition,
				type
			} = item;
			return (
				<TechnologyFragmentComponent
					item={technology[indx]}
					gridColumns={gridColumns}
					marginPosition={marginPosition}
					positionReveal={positionReveal}
					shadowPosition={shadowPosition}
					type={type}
					maxWidth1200={maxWidth1200}
					maxWidth900={maxWidth900}
					isVisible={isVisible}
				/>
			);
		});
	}
};

export default TechBigScreen;

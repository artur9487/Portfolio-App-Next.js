/** @format */
import { Grid, Box, Typography } from '@mui/material';
import styles from '/styles/Home.module.scss';
import styles2 from '../../styles/Second.module.scss';
import { techSmallScreenParams } from './SectionArrays';

const TechSmallScreen = ({ technology, isVisible }) => {
	return techSmallScreenParams.map((item, indx) => {
		const { positionReveal, shadowPosition } = item;
		return (
			<Grid
				key={indx}
				direction='column'
				alignItems='center'
				justifyContent='center'
				container
				className={styles2.styli2}
				item
				xs={6}
				spacing={3}
				sx={{
					height: 50,
					color: 'white',
					textAlign: 'center',
					width: '50%'
				}}>
				<Box
					className={isVisible ? positionReveal : styles.noVisibility}
					sx={{
						borderRadius: 3,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						bgcolor: 'rgb(39, 37, 43)',

						width: 100,
						border: 0,
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
							alignItems: 'center',
							width: '100%',
							height: '100%'
						}}>
						<Typography
							sx={{
								letterSpacing: 2,
								color: 'rgb(216, 214, 219)'
							}}>
							{technology[indx]}
						</Typography>
					</Box>
				</Box>
			</Grid>
		);
	});
};

export default TechSmallScreen;

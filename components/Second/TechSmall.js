/** @format */
import { Grid, Box, Typography } from '@mui/material';
import styles from '/styles/Home.module.scss';
import styles2 from '../../styles/Second.module.scss';

const TechSmall = ({ techArr, isVisible }) => {
	let stylo = null;
	let stylo2 = null;

	return techArr.map((item, indx) => {
		switch (indx) {
			case 0:
				stylo = styles2.firstSmall;
				stylo2 = styles2.up;
				break;
			case 1:
				stylo = styles2.firstSmall;
				stylo2 = styles2.up;
				break;
			case 2:
				stylo = styles2.secondSmall;
				stylo2 = styles2.right;
				break;
			case 3:
				stylo = styles2.secondSmall;
				stylo2 = styles2.left;
				break;
			case 4:
				stylo = styles2.thirdSmall;
				stylo2 = styles2.right;
				break;
			case 5:
				stylo = styles2.thirdSmall;
				stylo2 = styles2.left;
				break;
			case 6:
				stylo = styles2.fifthSmall;
				stylo2 = styles2.right;
				break;
			case 7:
				stylo = styles2.fifthSmall;
				stylo2 = styles2.left;
				break;
			case 8:
				stylo = styles2.sixthSmall;
				stylo2 = styles2.right;
				break;
			case 9:
				stylo = styles2.sixthSmall;
				stylo2 = styles2.left;
				break;
			case 10:
				stylo = styles2.seventhSmall;
				stylo2 = styles2.right;
				break;
			case 11:
				stylo = styles2.seventhSmall;
				stylo2 = styles2.left;
				break;
			case 12:
				stylo = styles2.eightSmall;
				stylo2 = styles2.right;
				break;
			case 13:
				stylo = styles2.eightSmall;
				stylo2 = styles2.left;
				break;
			case 14:
				stylo = styles2.nineSmall;
				stylo2 = styles2.down;
				break;
			case 15:
				stylo = styles2.nineSmall;
				stylo2 = styles2.down;
				break;
			default:
				break;
		}

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
					className={isVisible ? stylo : styles.noVis}
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
						className={isVisible ? stylo2 : styles.noVis}
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
								fontFamily: 'Alumni Sans Inline One',
								letterSpacing: 2,
								color: 'rgb(216, 214, 219)'
							}}>
							{item}
						</Typography>
					</Box>
				</Box>
			</Grid>
		);
	});
};

export default TechSmall;

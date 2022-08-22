/** @format */
import CallIcon from '@mui/icons-material/Call';
import styles2 from '/styles/Fourth.module.scss';
import styles from '/styles/Home.module.scss';
import { Stack, Box, Typography } from '@mui/material';

const FirstPart = ({ matches3, matches2, isVisible }) => {
	return (
		<Stack
			justifyContent='flex-start'
			direction='column'
			spacing={4}
			sx={{ height: '50%' }}>
			<Box className={isVisible ? styles2.card0 : styles.noVis}>
				<Stack
					className={isVisible ? styles2.innerCard0 : styles.noVis}
					sx={{
						bgcolor: 'rgba(39, 37, 43, 0.5)',
						p: !matches3 ? 5 : 3,
						borderRadius: 6,
						border: 2,
						borderColor: 'rgb(75, 71, 82)'
					}}>
					<Typography
						textAlign='flex-start'
						sx={{
							fontSize: matches3 ? 24 : matches2 ? 30 : 40,
							fontFamily: 'Alumni Sans Inline One',
							color: 'rgb(216, 214, 219)'
						}}>
						Would love to be a part of your company!
					</Typography>
					<Typography
						textAlign='flex-start'
						sx={{
							fontSize: matches3 ? 20 : matches2 ? 26 : 33,
							fontFamily: 'Alumni Sans Inline One',
							color: 'rgb(216, 214, 219)'
						}}>
						If you think that too:
					</Typography>
				</Stack>
			</Box>
			<Box className={isVisible ? styles2.card0 : styles.noVis}>
				<Stack
					className={isVisible ? styles2.innerCard0 : styles.noVis}
					spacing={4}
					direction='row'
					alignItems='center'
					sx={{
						bgcolor: 'rgba(39, 37, 43, 0.5)',
						p: !matches3 ? 5 : 2,
						borderRadius: 6,
						border: 2,
						borderColor: 'rgb(75, 71, 82)'
					}}>
					<Stack alignItems='center' spacing={3} direction='row'>
						<CallIcon sx={{ fontSize: 40, color: 'rgb(216, 214, 219)' }} />
						<Typography
							textAlign='flex-start'
							sx={{
								fontSize: matches3 ? 20 : matches2 ? 26 : 33,
								fontFamily: 'Alumni Sans Inline One',
								color: 'rgb(216, 214, 219)'
							}}>
							Call me:
						</Typography>
					</Stack>
					<Typography
						textAlign='flex-start'
						sx={{
							ml: 30,
							fontSize: matches3 ? 20 : matches2 ? 26 : 33,
							fontFamily: 'Alumni Sans Inline One',
							color: 'rgb(216, 214, 219)'
						}}>
						**********
					</Typography>
				</Stack>
			</Box>
		</Stack>
	);
};

export default FirstPart;

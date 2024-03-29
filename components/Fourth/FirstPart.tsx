/** @format */
import CallIcon from '@mui/icons-material/Call';
import styles2 from '/styles/Fourth.module.scss';
import styles from '/styles/Home.module.scss';
import { Stack, Box, Typography } from '@mui/material';
import React from 'react';

interface firstPart_schema {
	maxWidth600: boolean;
	maxWidth900: boolean;
	isVisible: boolean;
}

const FirstPart: React.FC<firstPart_schema> = ({
	maxWidth600,
	maxWidth900,
	isVisible
}) => {
	return (
		<Stack
			justifyContent='flex-start'
			direction='column'
			spacing={4}
			sx={{ height: '50%' }}>
			<Box className={isVisible ? styles2.card0 : styles.noVisibility}>
				<Stack
					className={isVisible ? styles2.innerCard0 : styles.noVisibility}
					sx={{
						bgcolor: 'rgba(39, 37, 43, 0.5)',
						p: !maxWidth600 ? 5 : 3,
						borderRadius: 6,
						border: 2,
						borderColor: 'rgb(75, 71, 82)'
					}}>
					<Typography
						sx={{
							fontSize: maxWidth600 ? 24 : maxWidth900 ? 30 : 40,
							textAlign: 'flex-start',
							color: 'rgb(216, 214, 219)'
						}}>
						Would love to be a part of your company!
					</Typography>
					<Typography
						sx={{
							fontSize: maxWidth600 ? 20 : maxWidth900 ? 26 : 33,
							textAlign: 'flex-start',
							color: 'rgb(216, 214, 219)'
						}}>
						If you think that too:
					</Typography>
				</Stack>
			</Box>
			<Box className={isVisible ? styles2.card0 : styles.noVisibility}>
				<Stack
					className={isVisible ? styles2.innerCard0 : styles.noVisibility}
					spacing={4}
					direction='row'
					alignItems='center'
					sx={{
						bgcolor: 'rgba(39, 37, 43, 0.5)',
						p: !maxWidth600 ? 5 : 2,
						borderRadius: 6,
						border: 2,
						borderColor: 'rgb(75, 71, 82)'
					}}>
					<Stack alignItems='center' spacing={3} direction='row'>
						<CallIcon sx={{ fontSize: 40, color: 'rgb(216, 214, 219)' }} />
						<Typography
							sx={{
								fontSize: maxWidth600 ? 20 : maxWidth900 ? 26 : 33,
								textAlign: 'flex-start',
								color: 'rgb(216, 214, 219)'
							}}>
							Call me:
						</Typography>
					</Stack>
					<Typography
						sx={{
							ml: 30,
							fontSize: maxWidth600 ? 20 : maxWidth900 ? 26 : 33,
							textAlign: 'flex-start',
							color: 'rgb(216, 214, 219)'
						}}>
						+48607805490
					</Typography>
				</Stack>
			</Box>
		</Stack>
	);
};

export default FirstPart;

/** @format */

import { Stack, Typography } from '@mui/material';

const FooterSection = () => {
	return (
		<Stack
			alignItems='center'
			justifyContent='center'
			direction='row'
			sx={{
				bgcolor: 'rgba(78, 78, 78, 0.7)',
				width: '100%',
				height: 70
			}}>
			<Typography
				sx={{ color: 'white', fontFamily: 'Alumni Sans Inline One' }}
				variant='h4'>
				Copyright @2022
			</Typography>
		</Stack>
	);
};

export default FooterSection;

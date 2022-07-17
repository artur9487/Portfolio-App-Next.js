/** @format */

import { Stack, Typography } from '@mui/material';

const FooterSection = (matches3) => {
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
				sx={{
					color: 'white',
					fontFamily: 'Alumni Sans Inline One',
					fontSize: !matches3 ? 30 : 25
				}}>
				Copyright @2022
			</Typography>
		</Stack>
	);
};

export default FooterSection;

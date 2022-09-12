/** @format */

import { Stack, Typography } from '@mui/material';

interface footerSection_schema {
	maxWidth600: boolean;
}

const FooterSection: React.FC<footerSection_schema> = ({ maxWidth600 }) => {
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
					fontSize: !maxWidth600 ? 30 : 25
				}}>
				Copyright @2022
			</Typography>
		</Stack>
	);
};

export default FooterSection;

/** @format */

import styles from '/styles/Home.module.scss';
import { Typography } from '@mui/material';
import styles2 from '/styles/Third.module.scss';

const CustomButton = ({ title, clickEvent }) => {
	return (
		<button onClick={clickEvent} className={styles2.dialogButton}>
			<Typography sx={{ color: 'white', fontSize: 15 }}>{title}</Typography>
		</button>
	);
};

export default CustomButton;

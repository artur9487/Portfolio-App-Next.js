/** @format */

import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { Box } from '@mui/system';
import styles from '/styles/Home.module.scss';

const Fade = ({ children }) => {
	const [isVisible, setVisible] = useState(false);
	return (
		<VisibilitySensor
			className={styles.visi}
			active={isVisible ? false : true}
			partialVisibility
			onChange={(isVisiblee) => {
				setVisible(isVisiblee);
			}}>
			<>
				<Box
					sx={{ width: '100%', height: '100%' }}
					className={isVisible ? styles.fade : styles.none}>
					{children}
				</Box>
			</>
		</VisibilitySensor>
	);
};

export default Fade;

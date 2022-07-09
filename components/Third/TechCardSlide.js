/** @format */

import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { Box } from '@mui/system';
import styles from '/styles/Home.module.scss';
import styles2 from '/styles/Third.module.scss';

const TechCardSlide = ({ children, indx }) => {
	const [isVisible, setVisible] = useState(false);
	return (
		<VisibilitySensor
			active={isVisible ? false : true}
			partialVisibility
			onChange={(isVisiblee) => {
				setVisible(isVisiblee);
			}}>
			<>
				<Box
					className={isVisible ? styles2[`techCardSlide${indx}`] : styles.none}>
					{children}
				</Box>
			</>
		</VisibilitySensor>
	);
};

export default TechCardSlide;

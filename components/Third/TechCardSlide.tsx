/** @format */

import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { Box } from '@mui/system';
import styles from '/styles/Home.module.scss';
import styles2 from '/styles/Third.module.scss';

interface techCardSlide_schema {
	children: JSX.Element;
	indx: number;
}

const TechCardSlide: React.FC<techCardSlide_schema> = ({ children, indx }) => {
	const [isVisible, setVisible] = useState<boolean>(false);

	return (
		<VisibilitySensor
			active={isVisible ? false : true}
			partialVisibility
			onChange={(isVisibleProp) => {
				setVisible(isVisibleProp);
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

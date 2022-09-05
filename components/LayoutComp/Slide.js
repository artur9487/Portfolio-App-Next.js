/** @format */

import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { Box } from '@mui/system';
import styles from '/styles/Home.module.scss';

const Slide = ({ children, slide }) => {
	const [isVisible, setVisible] = useState(false);
	return (
		<VisibilitySensor
			className='visibilityStyle'
			active={isVisible ? false : true}
			partialVisibility
			onChange={(isVisibleProp) => {
				setVisible(isVisibleProp);
			}}>
			<>
				<Box
					sx={{ width: '100%', height: '100%' }}
					className={isVisible ? slide : styles.noVisibility}>
					{children}
				</Box>
			</>
		</VisibilitySensor>
	);
};

export default Slide;

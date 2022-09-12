/** @format */

import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { Box } from '@mui/system';
import styles from '/styles/Home.module.scss';
import React from 'react';

interface slide_schema {
	children: JSX.Element;
	slide: string;
}

const Slide: React.FC<slide_schema> = ({ children, slide }) => {
	const [isVisible, setVisible] = useState(false);
	return (
		<VisibilitySensor
			active={isVisible ? false : true}
			partialVisibility
			onChange={(isVisibleProp) => {
				setVisible(isVisibleProp);
			}}>
			<Box
				sx={{ width: '100%', height: '100%' }}
				className={isVisible ? slide : styles.noVisibility}>
				{children}
			</Box>
		</VisibilitySensor>
	);
};

export default Slide;

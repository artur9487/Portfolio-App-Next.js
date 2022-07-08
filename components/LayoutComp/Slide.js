/** @format */

import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import { Box } from '@mui/system';

const Slide = ({ children, slide }) => {
	const [isVisible, setVisible] = useState(false);
	return (
		<VisibilitySensor
			className='visi'
			active={isVisible ? false : true}
			partialVisibility
			onChange={(isVisiblee) => {
				setVisible(isVisiblee);
			}}>
			<>
				<Box
					sx={{ width: '100%', height: '100%' }}
					className={isVisible ? slide : 'none'}>
					{children}
				</Box>
			</>
		</VisibilitySensor>
	);
};

export default Slide;

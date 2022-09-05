/** @format */
import { Box } from '@mui/material';
import styles2 from '/styles/First.module.scss';
import styles from '/styles/Home.module.scss';

const BracketsComponent = ({
	isVisible,
	ifNot600_width_Value,
	if600_width_Value,
	ifNot600_height_Value,
	if600_height_Value,
	bottom_Value,
	right_Value,
	gradient,
	maxWidth600
}) => {
	return (
		<Box
			className={isVisible ? styles2.brackets : styles.none}
			sx={{
				width: !maxWidth600 ? ifNot600_width_Value : if600_width_Value,
				position: 'absolute',
				bottom: bottom_Value,
				right: right_Value,
				height: !maxWidth600 ? ifNot600_height_Value : if600_height_Value,
				background: gradient
			}}
		/>
	);
};

export default BracketsComponent;

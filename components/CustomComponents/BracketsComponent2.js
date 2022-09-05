/** @format */
import { Box } from '@mui/material';
import styles2 from '/styles/First.module.scss';
import styles from '/styles/Home.module.scss';

const BracketsComponent2 = ({
	isVisible,
	ifNot600_width_Value,
	if600_width_Value,
	ifNot600_height_Value,
	if600_height_Value,
	top_Value,
	left_Value,
	gradient,
	maxWidth600
}) => {
	return (
		<Box
			className={isVisible ? styles2.brackets : styles.none}
			sx={{
				width: !maxWidth600 ? ifNot600_width_Value : if600_width_Value,
				position: 'absolute',
				top: top_Value,
				left: left_Value,
				height: !maxWidth600 ? ifNot600_height_Value : if600_height_Value,
				background: gradient
			}}
		/>
	);
};

export default BracketsComponent2;

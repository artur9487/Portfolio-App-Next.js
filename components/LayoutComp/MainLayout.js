/** @format */
import { Box } from '@mui/material';
import styles from '/styles/Home.module.scss';

const MainLayout = ({ children }) => {
	return <Box className={styles.mainLayout}>{children}</Box>;
};

export default MainLayout;

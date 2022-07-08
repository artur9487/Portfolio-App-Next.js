/** @format */

import { Box, Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import CallIcon from '@mui/icons-material/Call';
import { IconButton } from '@mui/material';
import Fade from './Fade';
import styles from '/styles/Home.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import styles2 from '/styles/SideBar.module.scss';

const SideBar = ({ ref0, ref1, ref2, ref3, ref4 }) => {
	const handler = (refer) => {
		refer.current.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<>
			<Box
				className={styles2.sideBar}
				sx={{
					overflow: 'hidden',
					border: 5,
					zIndex: 999,
					borderRadius: 10,
					position: 'fixed',
					top: '25%',
					left: 20,
					height: '50%'
				}}>
				<Box
					className={styles2.sideBar}
					sx={{
						filter: 'blur(50px)',
						zIndex: 999,
						borderRadius: 10,
						top: '25%',
						left: 20,
						bgcolor: 'rgba(49, 49, 49, 0.9)',
						height: '100%'
					}}
				/>
			</Box>

			<Box
				sx={{
					zIndex: 9999,
					position: 'fixed',
					top: '25%',
					left: 45,
					height: '50%'
				}}>
				<Fade>
					<Stack
						direction='column'
						sx={{ height: '100%' }}
						justifyContent='center'>
						<Stack
							direction='column'
							sx={{ height: '75%' }}
							justifyContent='space-between'
							alignItems='center'>
							<IconButton
								className={styles2.iconShake}
								onClick={() => handler(ref0)}>
								<HomeIcon fontSize='large' />
							</IconButton>
							<IconButton
								className={styles2.iconShake}
								onClick={() => handler(ref1)}>
								<AccountCircleIcon fontSize='large' />
							</IconButton>
							<IconButton
								className={styles2.iconShake}
								onClick={() => handler(ref2)}>
								<CodeIcon fontSize='large' />
							</IconButton>
							<IconButton
								className={styles2.iconShake}
								onClick={() => handler(ref3)}>
								<WebIcon fontSize='large' />
							</IconButton>
							<IconButton
								className={styles2.iconShake}
								onClick={() => handler(ref4)}>
								<CallIcon fontSize='large' />
							</IconButton>
						</Stack>
					</Stack>
				</Fade>
			</Box>
		</>
	);
};

export default SideBar;

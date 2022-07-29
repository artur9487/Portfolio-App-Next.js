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

const SideBar = ({ ref0, ref1, ref2, ref3, ref4, matches3 }) => {
	const handler = (refer) => {
		refer.current.scrollIntoView({ behavior: 'smooth' });
	};
	return (
		<>
			<Box
				className={styles.fade600}
				sx={{
					overflow: 'hidden',
					border: 5,
					zIndex: 999,
					borderRadius: 10,
					position: 'fixed',
					top: !matches3 ? '25%' : '85%',
					left: 20,
					height: !matches3 ? '50%' : 80,
					width: !matches3 ? 100 : '90vw'
				}}>
				<Box
					sx={{
						filter: !matches3 ? 'blur(50px)' : 'blur(20px)',
						zIndex: 999,
						borderRadius: 10,
						top: !matches3 ? '25%' : '85%',
						left: 20,
						bgcolor: !matches3
							? 'rgba(49, 49, 49, 0.9)'
							: 'rgba(49, 49, 49, 1)',
						height: !matches3 ? '100%' : 80,
						width: !matches3 ? 100 : '100%'
					}}
				/>
			</Box>

			<Box
				className={styles.fade600}
				sx={{
					zIndex: 9999,
					position: 'fixed',
					top: !matches3 ? '25%' : '85%',
					left: !matches3 ? 45 : 20,
					height: !matches3 ? '100%' : 80,
					width: !matches3 ? 'auto' : '90vw'
				}}>
				<Fade>
					<Stack
						direction='column'
						sx={{ height: !matches3 ? '50%' : '100%' }}
						justifyContent='center'>
						<Stack
							direction={!matches3 ? 'column' : 'row'}
							sx={{ height: !matches3 ? '75%' : 40 }}
							justifyContent={!matches3 ? 'space-between' : 'space-around'}
							alignItems='center'>
							<IconButton
								sx={{
									'&:hover': {
										backgroundColor: 'rgb(144, 0, 255)'
									}
								}}
								className={styles2.iconShake}
								onClick={() => handler(ref0)}>
								<HomeIcon fontSize={!matches3 ? 'large' : 'medium'} />
							</IconButton>
							<IconButton
								sx={{
									'&:hover': {
										backgroundColor: 'rgb(144, 0, 255)'
									}
								}}
								className={styles2.iconShake}
								onClick={() => handler(ref1)}>
								<AccountCircleIcon fontSize={!matches3 ? 'large' : 'medium'} />
							</IconButton>
							<IconButton
								sx={{
									'&:hover': {
										backgroundColor: 'rgb(144, 0, 255)'
									}
								}}
								className={styles2.iconShake}
								onClick={() => handler(ref2)}>
								<CodeIcon fontSize={!matches3 ? 'large' : 'medium'} />
							</IconButton>
							<IconButton
								sx={{
									'&:hover': {
										backgroundColor: 'rgb(144, 0, 255)'
									}
								}}
								className={styles2.iconShake}
								onClick={() => handler(ref3)}>
								<WebIcon fontSize={!matches3 ? 'large' : 'medium'} />
							</IconButton>
							<IconButton
								sx={{
									'&:hover': {
										backgroundColor: 'rgb(144, 0, 255)'
									}
								}}
								className={styles2.iconShake}
								onClick={() => handler(ref4)}>
								<CallIcon fontSize={!matches3 ? 'large' : 'medium'} />
							</IconButton>
						</Stack>
					</Stack>
				</Fade>
			</Box>
		</>
	);
};

export default SideBar;

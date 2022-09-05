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

const SideBar = ({
	introSectionRef,
	firstSectionRef,
	secondSectionRef,
	thirdSectionRef,
	fourthSectionRef,
	maxWidth600
}) => {
	const handler = (reference) => {
		reference.current.scrollIntoView({ behavior: 'smooth' });
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
					top: !maxWidth600 ? '25%' : '85%',
					left: 20,
					height: !maxWidth600 ? '50%' : 80,
					width: !maxWidth600 ? 100 : '90vw'
				}}>
				<Box
					sx={{
						filter: !maxWidth600 ? 'blur(50px)' : 'blur(20px)',
						zIndex: 999,
						borderRadius: 10,
						top: !maxWidth600 ? '25%' : '85%',
						left: 20,
						bgcolor: !maxWidth600
							? 'rgba(49, 49, 49, 0.9)'
							: 'rgba(49, 49, 49, 1)',
						height: !maxWidth600 ? '100%' : 80,
						width: !maxWidth600 ? 100 : '100%'
					}}
				/>
			</Box>

			<Box
				className={styles.fade600}
				sx={{
					zIndex: 9999,
					position: 'fixed',
					top: !maxWidth600 ? '25%' : '85%',
					left: !maxWidth600 ? 45 : 20,
					height: !maxWidth600 ? '100%' : 80,
					width: !maxWidth600 ? 'auto' : '90vw'
				}}>
				<Fade>
					<Stack
						direction='column'
						sx={{ height: !maxWidth600 ? '50%' : '100%' }}
						justifyContent='center'>
						<Stack
							direction={!maxWidth600 ? 'column' : 'row'}
							sx={{ height: !maxWidth600 ? '75%' : 40 }}
							justifyContent={!maxWidth600 ? 'space-between' : 'space-around'}
							alignItems='center'>
							<IconButton
								sx={{
									'&:hover': {
										backgroundColor: 'rgb(144, 0, 255)'
									}
								}}
								className={styles2.iconShake}
								onClick={() => handler(introSectionRef)}>
								<HomeIcon fontSize={!maxWidth600 ? 'large' : 'medium'} />
							</IconButton>
							<IconButton
								sx={{
									transition: (theme) =>
										theme.transitions.create('all', {
											duration: theme.transitions.duration.longest
										}),
									'&:hover': {
										backgroundColor: 'rgb(144, 0, 255)'
									}
								}}
								className={styles2.iconShake}
								onClick={() => handler(firstSectionRef)}>
								<AccountCircleIcon
									fontSize={!maxWidth600 ? 'large' : 'medium'}
								/>
							</IconButton>
							<IconButton
								sx={{
									'&:hover': {
										backgroundColor: 'rgb(144, 0, 255)'
									}
								}}
								className={styles2.iconShake}
								onClick={() => handler(secondSectionRef)}>
								<CodeIcon fontSize={!maxWidth600 ? 'large' : 'medium'} />
							</IconButton>
							<IconButton
								sx={{
									'&:hover': {
										backgroundColor: 'rgb(144, 0, 255)'
									}
								}}
								className={styles2.iconShake}
								onClick={() => handler(thirdSectionRef)}>
								<WebIcon fontSize={!maxWidth600 ? 'large' : 'medium'} />
							</IconButton>
							<IconButton
								sx={{
									'&:hover': {
										backgroundColor: 'rgb(144, 0, 255)'
									}
								}}
								className={styles2.iconShake}
								onClick={() => handler(fourthSectionRef)}>
								<CallIcon fontSize={!maxWidth600 ? 'large' : 'medium'} />
							</IconButton>
						</Stack>
					</Stack>
				</Fade>
			</Box>
		</>
	);
};

export default SideBar;

/** @format */

import { Typography, Stack, Box, Chip } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles2 from '/styles/Third.module.scss';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const ProjectDialog = ({
	singleProject,
	maxWidth1200,
	maxWidth600,
	open,
	setOpen
}) => {
	const {
		projLink,
		repo,
		projectName,
		photo0,
		photo1,
		photo2,
		stack,
		description
	} = singleProject.node;

	const stackArray = stack.split(',');
	const firstLetter = projectName.slice(0, 1);
	const restLetters = projectName.slice(1);

	const photos = [{ photo: photo0 }, { photo: photo1 }, { photo: photo2 }];

	const buttonTextProperties = {
		color: 'white',
		fontSize: !maxWidth600 ? 17 : 14,
		letterSpacing: !maxWidth600 ? 2 : 1
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Dialog
			sx={{ zIndex: 9999 }}
			PaperProps={{
				style: {
					background: `linear-gradient(
                    215deg,
                    rgb(12, 6, 19) 29.9%,
                    rgba(30, 30, 30, 1) 80%
                
                )`
				}
			}}
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={handleClose}
			aria-describedby='alert-dialog-slide-description'
			maxWidth='xl'>
			<DialogContent>
				<Stack direction={!maxWidth1200 ? 'row' : 'column'}>
					<Stack
						direction='column '
						justifyContent='center'
						sx={{
							width: !maxWidth1200 ? '50%' : '100%',
							position: 'relative'
						}}>
						<Carousel
							prevIcon={
								<ArrowBackIosNewIcon sx={{ color: 'violet', fontSize: 60 }} />
							}
							nextIcon={
								<ArrowForwardIosIcon sx={{ color: 'violet', fontSize: 60 }} />
							}>
							{photos.map((item, indx) => {
								return (
									<Carousel.Item style={{ position: 'relative' }} key={indx}>
										<Box sx={{ width: '100%', height: '100%' }}>
											<Image
												width={1000}
												height={1000}
												className={`${styles2.caroImg}`}
												src={item.photo.url}
												alt='slide'
											/>
										</Box>
									</Carousel.Item>
								);
							})}
						</Carousel>
					</Stack>
					<Stack
						direction='column'
						spacing={3}
						sx={{
							width: !maxWidth1200 ? '50%' : '100%',
							p: !maxWidth600 ? 4 : 0
						}}>
						<Box>
							<Stack
								direction='row'
								justifyContent='center'
								alignItems='center'>
								<Typography
									textAlign='center'
									fontSize={70}
									sx={{
										color: 'rgb(148, 34, 148);'
									}}>
									{firstLetter}
								</Typography>
								<Typography
									textAlign='center'
									fontSize={!maxWidth600 ? 70 : 40}
									sx={{
										color: 'white'
									}}>
									{restLetters}
								</Typography>
							</Stack>
							<Box
								sx={{
									height: 3,
									background:
										'linear-gradient(90deg, rgb(78, 22, 78), rgb(148, 34, 148));',
									margin: 'auto',
									width: '60%',
									borderRadius: 5
								}}
							/>
						</Box>
						<Box>
							{stackArray.map((item, indx) => {
								return (
									<Chip
										key={indx}
										color='secondary'
										sx={{
											letterSpacing: !maxWidth600 ? 2 : 1,
											m: 1,
											fontSize: !maxWidth600 ? 17 : 14,
											background:
												'linear-gradient(90deg, rgb(78, 22, 78), rgb(148, 34, 148));'
										}}
										label={item}
									/>
								);
							})}
						</Box>
						<Typography
							sx={{
								color: 'white',
								lineHeight: 1.8,
								letterSpacing: !maxWidth600 ? 1 : 0.5,
								fontSize: !maxWidth600 ? 20 : 16
							}}
							align='justify'>
							{description}
						</Typography>
						<Stack
							sx={{ width: '100%' }}
							justifyContent='space-evenly'
							direction='row'>
							<a
								target='_blank'
								href={repo}
								rel='noreferrer'
								className={styles2.dialogButton}>
								<Typography sx={buttonTextProperties}>Show Code</Typography>
							</a>
							{projectName === 'BudgetKing' ? null : (
								<a
									target='_blank'
									rel='noreferrer'
									href={projLink}
									className={styles2.dialogButton}>
									<Typography sx={buttonTextProperties}>Live Demo</Typography>
								</a>
							)}
							<button onClick={handleClose} className={styles2.dialogButton}>
								<Typography sx={buttonTextProperties}>Close Dialog</Typography>
							</button>
						</Stack>
					</Stack>
				</Stack>
			</DialogContent>
		</Dialog>
	);
};

export default ProjectDialog;

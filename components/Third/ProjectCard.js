/** @format */

import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Stack,
	Box,
	Chip
} from '@mui/material';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import TechCardSlide from './TechCardSlide';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles2 from '/styles/Third.module.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

const ProjectCard = ({ items, indx, maxWidth1200, maxWidth600 }) => {
	const {
		projLink,
		repo,
		projectName,
		photo0,
		photo1,
		photo2,
		stack,
		description,
		technology
	} = items.node;
	const myRef = useRef(null);
	const stackArr = stack.split(',');

	const [open, setOpen] = useState(false);
	const firstLetter = projectName.slice(0, 1);
	const restLetters = projectName.slice(1);

	const obj = [{ photo: photo0 }, { photo: photo1 }, { photo: photo2 }];

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<TechCardSlide indx={indx}>
			<Card
				onClick={() => setOpen(true)}
				className={`${styles2.projectCard} ${styles2.shadows2}`}
				ref={myRef}
				sx={{
					width: maxWidth600 ? '100%' : 300,
					height: 300,
					bgcolor: 'rgba(39, 37, 43, 0.5)',
					borderRadius: 5,
					p: 2,
					border: 2,
					borderColor: 'rgb(75, 71, 82)',
					cursor: 'pointer',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					margin: 'auto'
				}}>
				<CardMedia
					className={styles2.projectCardMedia}
					sx={{
						height: '100%',
						width: '100%',
						position: 'relative'
					}}>
					<Image src={photo0.url} layout='fill' objectFit='contain' />
				</CardMedia>
				<CardContent sx={{ height: '30%', width: '100%' }}>
					<Stack sx={{ width: '100%' }} direction='column'>
						<Typography
							sx={{
								color: 'rgb(216, 214, 219)'
							}}
							fontSize={!maxWidth1200 ? 35 : 30}
							textAlign='center'>
							{projectName}
						</Typography>
						<Typography
							sx={{
								color: 'rgb(216, 214, 219)',
								mt: -2
							}}
							fontSize={!maxWidth1200 ? 25 : 20}
							textAlign='center'>
							{technology}
						</Typography>
					</Stack>
				</CardContent>
			</Card>
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
								{obj.map((item, indx) => {
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
								{stackArr.map((item, indx) => {
									return (
										<Chip
											key={indx}
											color='secondary'
											sx={{
												m: 1,
												fontSize: !maxWidth600 ? 14 : 11,
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
									fontSize: !maxWidth600 ? 16 : 13
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
									<Typography
										sx={{ color: 'white', fontSize: !maxWidth600 ? 15 : 12 }}>
										Show Code
									</Typography>
								</a>
								{projectName === 'BudgetKing' ? null : (
									<a
										target='_blank'
										rel='noreferrer'
										href={projLink}
										className={styles2.dialogButton}>
										<Typography
											sx={{ color: 'white', fontSize: !maxWidth600 ? 15 : 12 }}>
											Live Demo
										</Typography>
									</a>
								)}
								<button onClick={handleClose} className={styles2.dialogButton}>
									<Typography
										sx={{ color: 'white', fontSize: !maxWidth600 ? 15 : 12 }}>
										Close Dialog
									</Typography>
								</button>
							</Stack>
						</Stack>
					</Stack>
				</DialogContent>
			</Dialog>
		</TechCardSlide>
	);
};
export default ProjectCard;

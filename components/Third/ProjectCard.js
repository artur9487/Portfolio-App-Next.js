/** @format */

import { Card, CardContent, CardMedia, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import TechCardSlide from './TechCardSlide';
import 'bootstrap/dist/css/bootstrap.css';
import styles2 from '/styles/Third.module.scss';
import ProjectDialog from './ProjectDialog';

const ProjectCard = ({ singleProject, indx, maxWidth1200, maxWidth600 }) => {
	const { projectName, photo0, technology } = singleProject.node;
	const [open, setOpen] = useState(false);

	const myRef = useRef(null);

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
			<ProjectDialog
				singleProject={singleProject}
				maxWidth1200={maxWidth1200}
				maxWidth600={maxWidth600}
				open={open}
				setOpen={setOpen}
			/>
		</TechCardSlide>
	);
};
export default ProjectCard;

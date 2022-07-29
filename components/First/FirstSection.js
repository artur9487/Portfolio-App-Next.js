/** @format */

import { Stack } from '@mui/material';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import image from '../../public/971.jpg';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import styles2 from '/styles/First.module.scss';
import styles from '/styles/Home.module.scss';

const FirstSection = ({ matches, matches3 }) => {
	const [isVisible, setVisible] = useState(false);
	const obj = [
		{
			text: `Hi! I am Artur. I am learning frontend technologies for about 2 years. I am looking for my firs Job as React, React-native or Next.js developer.`,
			styl: styles2.text1
		},
		{
			text: `I took my entire knowledge from tutorials, documentations, or developer articles. To strong my skills I made a few projects in which I mostly cover my knowledge. `,
			styl: styles2.text2
		},
		{
			text: `I hope for the the oppurtunity to take the first steps and
	grow in the fronted software industry.`,
			styl: styles2.text3
		}
	];

	return (
		<>
			<VisibilitySensor
				active={isVisible ? false : true}
				partialVisibility
				onChange={(isVisiblee) => {
					setVisible(isVisiblee);
				}}>
				<Stack
					justifyContent={!matches ? 'center' : 'space-evenly'}
					spacing={3}
					alignItems='center'
					className={isVisible ? styles.fade1200 : styles.noVis}
					direction={!matches ? 'row' : 'column'}
					sx={{ width: '100%', height: '90%', mt: matches ? 10 : 0 }}>
					<Stack
						className={styles.fade600}
						sx={{
							maxWidth: matches || matches3 ? '100%' : '50%'
						}}
						alignItems='center'
						justifyContent='center'
						direction='row'>
						<Stack
							sx={{
								width: !matches3 ? '70%' : '100%',
								p: 5,
								position: 'relative',
								background:
									'linear-gradient(0deg, rgba(10, 0, 15, 0.1),rgba(5, 2, 8, 0.1))'
							}}
							direction='column'
							spacing={2}>
							<Box
								className={isVisible ? styles2.brackets : styles.none}
								sx={{
									width: !matches3 ? 90 : 45,
									position: 'absolute',
									bottom: 0,
									right: 0,
									height: !matches3 ? 10 : 5,
									background:
										'linear-gradient(45deg, rgb(90, 0, 158),rgb(144, 0, 255))'
								}}
							/>
							<Box
								className={isVisible ? styles2.brackets : styles.none}
								sx={{
									width: !matches3 ? 10 : 5,
									position: 'absolute',
									bottom: 0,
									right: 0,
									height: !matches3 ? 90 : 45,
									background:
										'linear-gradient(125deg, rgb(90, 0, 158),rgb(144, 0, 255))'
								}}
							/>
							<Box
								className={isVisible ? styles2.brackets : styles.none}
								sx={{
									width: !matches3 ? 60 : 30,
									position: 'absolute',
									top: -15,
									left: 0,
									height: !matches3 ? 10 : 5,
									background:
										'linear-gradient(45deg, rgb(90, 0, 158),rgb(144, 0, 255))'
								}}
							/>
							<Box
								className={isVisible ? styles2.brackets : styles.none}
								sx={{
									width: !matches3 ? 10 : 5,
									position: 'absolute',
									top: -10,
									left: 0,
									height: !matches3 ? 60 : 30,
									background:
										'linear-gradient(125deg, rgb(90, 0, 158),rgb(144, 0, 255))'
								}}
							/>
							{obj.map((item, indx) => {
								return (
									<Typography
										key={indx}
										align='justify'
										className={isVisible ? item.styl : null}
										sx={{
											fontSize: !matches3 ? 20 : 15,
											lineHeight: 1.5,
											fontFamily: 'Poppins'
										}}>
										{item.text}
										<span></span>
									</Typography>
								);
							})}
						</Stack>
					</Stack>
					<Stack
						className={styles.fade600}
						sx={{ maxWidth: !matches ? '50%' : '100%' }}
						alignItems='center'
						justifyContent='center'
						direction='row'>
						<Box
							className={isVisible ? styles2.imageVis : styles.none}
							sx={{
								background: `linear-gradient(
								45deg,
								rgba(144, 0, 255, 1),
								rgba(144, 0, 255, 0.1)
								)`,
								width: !matches ? 400 : !matches3 ? 250 : 200,
								height: !matches ? 500 : !matches3 ? 400 : 250,
								borderRadius: 10
							}}>
							<Box
								sx={{
									transform: 'rotate(10deg)',
									borderRadius: 10,
									overflow: 'hidden',
									transition: 'transform 0.5s linear',
									width: !matches ? 400 : !matches3 ? 250 : 200,
									height: !matches ? 500 : !matches3 ? 400 : 250,
									'&:hover': {
										transform: 'rotate(0deg)'
									}
								}}>
								<Image src={image} objectFit='cover' layout='fill' alt='img' />
							</Box>
						</Box>
					</Stack>
				</Stack>
			</VisibilitySensor>
		</>
	);
};

export default FirstSection;

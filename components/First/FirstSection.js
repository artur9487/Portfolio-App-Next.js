/** @format */

import { Stack } from '@mui/material';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import image from '../../public/971.jpg';
import styles from '/styles/Home.module.scss';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import styles2 from '/styles/First.module.scss';

const FirstSection = ({ matches }) => {
	const [isVisible, setVisible] = useState(false);
	const obj = [
		{
			text: `Hi! I am Artur. I am learning frontend technologies for about 3
	years. I am looking for my firs Job as React, React-native or
	Next.js developer.`,
			styl: styles2.text1
		},
		{
			text: `I took my entire knowledge from tutorials, documentations, or
	developer articles. To strong my skills I made a few projects in
	which I mostly cover my knowledge. `,
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
					className={styles.fade1200}
					direction={!matches ? 'row' : 'column'}
					sx={{ width: '100%', height: '90%', mt: matches ? 10 : 0 }}>
					<Stack
						sx={{
							maxWidth: !matches ? '50%' : '100%'
						}}
						alignItems='center'
						justifyContent='center'
						direction='row'>
						<Stack
							sx={{
								width: '70%',
								p: 5,
								position: 'relative',
								background:
									'linear-gradient(0deg, rgba(10, 0, 15, 0.1),rgba(5, 2, 8, 0.1))'
							}}
							direction='column'
							spacing={2}>
							<Box
								className={isVisible ? styles2.brackets : null}
								sx={{
									width: 90,
									position: 'absolute',
									bottom: 0,
									right: 0,
									height: 10,
									background:
										'linear-gradient(45deg, rgb(90, 0, 158),rgb(144, 0, 255))'
								}}
							/>
							<Box
								className={isVisible ? styles2.brackets : null}
								sx={{
									width: 10,
									position: 'absolute',
									bottom: 0,
									right: 0,
									height: 90,
									background:
										'linear-gradient(125deg, rgb(90, 0, 158),rgb(144, 0, 255))'
								}}
							/>
							<Box
								className={isVisible ? styles2.brackets : null}
								sx={{
									width: 60,
									position: 'absolute',
									top: -15,
									left: 0,
									height: 10,
									background:
										'linear-gradient(45deg, rgb(90, 0, 158),rgb(144, 0, 255))'
								}}
							/>
							<Box
								className={isVisible ? styles2.brackets : null}
								sx={{
									width: 10,
									position: 'absolute',
									top: -5,
									left: 0,
									height: 60,
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
											fontSize: 20,
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
						sx={{ maxWidth: !matches ? '50%' : '100%' }}
						alignItems='center'
						justifyContent='center'
						direction='row'>
						<Box
							sx={{
								background: `linear-gradient(
								45deg,
								rgba(144, 0, 255, 1),
								rgba(144, 0, 255, 0.1)
								)`,
								width: !matches ? 400 : 300,
								height: !matches ? 500 : 400,
								borderRadius: 10
							}}>
							<Box
								sx={{
									transform: 'rotate(10deg)',
									borderRadius: 10,
									overflow: 'hidden',
									transition: 'transform 0.5s linear',
									width: !matches ? 400 : 300,
									height: !matches ? 500 : 400,
									'&:hover': {
										transform: 'rotate(0deg)'
									}
								}}>
								<Image src={image} objectFit='cover' layout='fill' />
							</Box>
						</Box>
					</Stack>
				</Stack>
			</VisibilitySensor>
		</>
	);
};

export default FirstSection;

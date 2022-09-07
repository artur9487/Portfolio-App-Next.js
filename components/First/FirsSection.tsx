/** @format */

import { Stack } from '@mui/material';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
//import image from '../../public/971.jpg';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import styles2 from '/styles/First.module.scss';
import styles from '/styles/Home.module.scss';
import BracketsComponent from '../CustomComponents/BracketsComponent';
import BracketsComponent2 from '../CustomComponents/BracketsComponent2';
import { text } from './SectionArrays';
import { bracketsCoordinates1 } from './SectionArrays';
import { bracketsCoordinates2 } from './SectionArrays';
import React from 'react';

interface Props {
	maxWidth1200: boolean;
	maxWidth600: boolean;
}

const FirstSection: React.FC<Props> = ({ maxWidth1200, maxWidth600 }) => {
	const [isVisible, setVisible] = useState<boolean>(false);

	return (
		<>
			<VisibilitySensor
				active={isVisible ? false : true}
				partialVisibility
				onChange={(isVisibleProp) => {
					setVisible(isVisibleProp);
				}}>
				<Stack
					justifyContent={!maxWidth1200 ? 'center' : 'space-evenly'}
					spacing={3}
					alignItems='center'
					className={isVisible ? styles.fade1200 : styles.noVisibility}
					direction={!maxWidth1200 ? 'row' : 'column'}
					sx={{ width: '100%', height: '90%', mt: maxWidth1200 ? 10 : 0 }}>
					<Stack
						className={styles.fade600}
						sx={{
							maxWidth: maxWidth1200 || maxWidth600 ? '100%' : '50%'
						}}
						alignItems='center'
						justifyContent='center'
						direction='row'>
						<Stack
							sx={{
								width: !maxWidth600 ? '70%' : '100%',
								p: 5,
								position: 'relative',
								background:
									'linear-gradient(0deg, rgba(10, 0, 15, 0.1),rgba(5, 2, 8, 0.1))'
							}}
							direction='column'
							spacing={2}>
							{bracketsCoordinates1.map((item, indx) => {
								return (
									<BracketsComponent
										key={indx}
										isVisible={isVisible}
										ifNot600_width_Value={item.ifNot600_width_Value}
										if600_width_Value={item.if600_width_Value}
										ifNot600_height_Value={item.ifNot600_height_Value}
										if600_height_Value={item.if600_height_Value}
										bottom_Value={item.bottom_Value}
										right_Value={item.right_Value}
										gradient={item.gradient}
										maxWidth600={maxWidth600}
									/>
								);
							})}
							{bracketsCoordinates2.map((item, indx) => {
								return (
									<BracketsComponent2
										key={indx}
										isVisible={isVisible}
										ifNot600_width_Value={item.ifNot600_width_Value}
										if600_width_Value={item.if600_width_Value}
										ifNot600_height_Value={item.ifNot600_height_Value}
										if600_height_Value={item.if600_height_Value}
										top_Value={item.top_Value}
										left_Value={item.left_Value}
										gradient={item.gradient}
										maxWidth600={maxWidth600}
									/>
								);
							})}
							{text.map((item, indx) => {
								return (
									<Typography
										key={indx}
										align='justify'
										className={isVisible ? item.style : styles.none}
										sx={{
											fontSize: !maxWidth600 ? 20 : 15,
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
						sx={{ maxWidth: !maxWidth1200 ? '50%' : '100%' }}
						alignItems='center'
						justifyContent='center'
						direction='row'>
						<Box
							className={isVisible ? styles2.imageStyle : styles.none}
							sx={{
								background: `linear-gradient(
								45deg,
								rgba(144, 0, 255, 1),
								rgba(144, 0, 255, 0.1)
								)`,
								width: !maxWidth1200 ? 400 : !maxWidth600 ? 250 : 200,
								height: !maxWidth1200 ? 500 : !maxWidth600 ? 400 : 250,
								borderRadius: 10
							}}>
							<Box
								sx={{
									transform: 'rotate(10deg)',
									borderRadius: 10,
									overflow: 'hidden',
									transition: 'transform 0.5s linear',
									width: !maxWidth1200 ? 400 : !maxWidth600 ? 250 : 200,
									height: !maxWidth1200 ? 500 : !maxWidth600 ? 400 : 250,
									'&:hover': {
										transform: 'rotate(0deg)'
									}
								}}>
								{/*<Image src={image} objectFit='cover' layout='fill' alt='img' />*/}
							</Box>
						</Box>
					</Stack>
				</Stack>
			</VisibilitySensor>
		</>
	);
};

export default FirstSection;

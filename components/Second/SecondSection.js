/** @format */
import { useState } from 'react';
import { Grid, Stack } from '@mui/material';
import { Box } from '@mui/material';
import TechCard from '../Third/TechCard';
import styles from '/styles/Home.module.scss';
import VisibilitySensor from 'react-visibility-sensor';
import styles2 from '../../styles/Second.module.scss';
import TechBigScreen from './TechBigScreen';
import TechSmallScreen from './TechSmallScreen';
import BracketsComponent from '../CustomComponents/BracketsComponent';
import BracketsComponent2 from '../CustomComponents/BracketsComponent2';
import { technology } from './SectionArrays';
import { bracketsCoordinates1 } from './SectionArrays';
import { bracketsCoordinates2 } from './SectionArrays';
import React from 'react';

/*interface Props {
	maxWidth1200: boolean;
	maxWidth900: boolean;
	maxWidth600: boolean;
}*/

const SecondSection /*: React.FC<Props>*/ = ({
	maxWidth1200,
	maxWidth900,
	maxWidth600
}) => {
	const [isVisible, setVisible] = useState(false); /*< boolean >*/

	return (
		<>
			<VisibilitySensor
				className={styles.visibilityStyle}
				active={isVisible ? false : true}
				partialVisibility
				onChange={(isVisibleProp) => {
					setVisible(isVisibleProp);
				}}>
				<Box
					className={styles.fade600}
					sx={{
						height: !maxWidth1200 ? '90%' : '100vh',
						width: '100%',
						mt: 12,
						position: 'relative'
					}}>
					<Box
						sx={{
							width: !maxWidth1200 ? '50%' : maxWidth600 ? '90%' : '70%',
							height: !maxWidth600 ? '50%' : '70%',
							margin: 'auto',
							position: 'relative'
						}}>
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
						<Grid
							rowSpacing={1}
							container
							direction='row'
							alignItems='center'
							justifyContent='center'
							sx={{
								left: 0,
								top: 0,
								width: '100%',
								height: '100%',
								opacity: !maxWidth600 ? 0 : 1,
								position: 'absolute'
							}}>
							<TechSmallScreen technology={technology} isVisible={isVisible} />
						</Grid>
						<Grid
							columnSpacing={2}
							sx={{
								width: '100%',
								height: '100%',
								opacity: maxWidth600 ? 0 : 1,
								left: 0,
								top: 0,
								position: 'absolute'
							}}
							container>
							<TechBigScreen
								technology={technology}
								maxWidth1200={maxWidth1200}
								maxWidth900={maxWidth900}
								isVisible={isVisible}
							/>
						</Grid>
					</Box>
					<Stack
						className={isVisible ? styles2.slideVisibility : styles.none}
						direction='column'
						justifyContent='center'
						sx={{
							height: '50%',
							widht: '100%'
						}}>
						<Box
							sx={{ width: !maxWidth600 ? '75%' : '90%' }}
							className='slide_body'>
							<Box className={[`slider`, styles2.shadowBox]}>
								<Box className='slide-track'>
									{technology.map((item, indx) => {
										return <TechCard key={indx} techName={item} indx={indx} />;
									})}
									{technology.map((item, indx) => {
										return <TechCard key={indx} techName={item} indx={indx} />;
									})}
								</Box>
							</Box>
						</Box>
					</Stack>
				</Box>
			</VisibilitySensor>
		</>
	);
};

export default SecondSection;

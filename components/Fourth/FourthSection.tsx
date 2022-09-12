/** @format */

import { Box, Stack, Typography, TypographyTypeMap } from '@mui/material';
import styles2 from '/styles/Fourth.module.scss';
import React, { useState } from 'react';
import styles from '/styles/Home.module.scss';
import VisibilitySensor from 'react-visibility-sensor';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';

interface fourthSection_schema {
	maxWidth600: boolean;
	maxWidth1200: boolean;
	maxWidth900: boolean;
}

const FourthSection: React.FC<fourthSection_schema> = ({
	maxWidth600,
	maxWidth1200,
	maxWidth900
}) => {
	const [isVisible, setVisible] = useState<boolean>(false);
	const [boxStyle, setBoxStyle] = useState<string>(styles2.box_notVisi);
	const [textStyle, setTextStyle] = useState<string>(styles2.text_notVisi);

	return (
		<>
			<VisibilitySensor
				active={isVisible ? false : true}
				partialVisibility
				onChange={(isVisibleProp) => {
					setVisible(isVisibleProp);
				}}>
				<Stack
					className={styles.fade1200}
					sx={{
						height: '90%',
						py: !maxWidth1200 ? 0 : 5,
						px: !maxWidth1200 ? 5 : !maxWidth600 ? 11 : 0
					}}>
					<Stack
						direction={!maxWidth1200 ? 'row' : 'column'}
						justifyContent='center'
						alignItems='center'
						spacing={5}
						sx={{ position: 'relative', height: '100%' }}>
						<FirstPart
							maxWidth900={maxWidth900}
							maxWidth600={maxWidth600}
							isVisible={isVisible}
						/>
						<SecondPart
							maxWidth900={maxWidth900}
							maxWidth600={maxWidth600}
							isVisible={isVisible}
							setBoxStyle={setBoxStyle}
							setTextStyle={setTextStyle}
						/>
						<Box
							sx={{
								borderRadius: 3,
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%,-50%)'
							}}
							className={boxStyle}>
							<Stack
								sx={{ width: '100%', height: '100%' }}
								direction='column'
								justifyContent='center'
								alignItems='center'>
								<Typography
									sx={{
										fontSize: !maxWidth600 ? 30 : 20,
										fontFamily: 'Alumni Sans Inline One'
									}}
									textAlign='center'
									className={textStyle}>
									Message sent
								</Typography>
							</Stack>
						</Box>
					</Stack>
				</Stack>
			</VisibilitySensor>
		</>
	);
};

export default FourthSection;

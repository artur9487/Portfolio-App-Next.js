/** @format */
import { Box, BoxTypeMap, Typography } from '@mui/material';
import styles from '/styles/Home.module.scss';
import { Stack } from '@mui/material';
import VisibilitySensor from 'react-visibility-sensor';
import { MutableRefObject, useState } from 'react';
import Fade from './Fade';
import React from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface layout_schema {
	children: JSX.Element;
	maxWidth1200: boolean;
	reference: MutableRefObject<
		MutableRefObject<OverridableComponent<BoxTypeMap<{}, 'div'>>>
	>;
	title: string;
	maxWidth600: boolean;
	style: string;
}

const Layout: React.FC<layout_schema> = ({
	children,
	maxWidth1200,
	reference,
	title,
	maxWidth600,
	style
}) => {
	const [isVisible, setVisible] = useState<boolean>(false);
	const firstLetter: string = title.slice(0, 1);
	const restLetters: string = title.slice(1);
	return (
		<section className={styles.visibilityStyle}>
			<Box
				ref={reference}
				sx={{
					height: !maxWidth1200 ? '100vh' : '100%',
					width: '100vw',
					p: 5
				}}>
				<VisibilitySensor
					active={isVisible ? false : true}
					partialVisibility
					onChange={(isVisibleProp) => {
						setVisible(isVisibleProp);
					}}>
					<>
						<Box
							className={styles.fade600}
							sx={{
								pb: 0,
								height: '10%',
								width: '100%',
								margin: 'auto',
								borderColor: 'white'
							}}>
							<Fade>
								<>
									<Stack
										direction='row'
										justifyContent='center'
										alignItems='center'
										sx={{
											width: '100%',
											height: '100%',
											mb: !maxWidth1200 ? 4 : -3
										}}>
										<Typography
											textAlign='center'
											fontSize={!maxWidth600 ? 140 : 70}
											sx={{
												color: 'rgb(144, 0, 255)'
											}}>
											{firstLetter}
										</Typography>
										<Typography
											textAlign='center'
											fontSize={!maxWidth600 ? 100 : 50}
											sx={{
												color: 'white'
											}}>
											{restLetters}
										</Typography>
									</Stack>

									<Box
										className={style}
										sx={{
											height: 5,
											background:
												'linear-gradient(rgb(90, 0, 158),rgb(144, 0, 255))',
											margin: 'auto',
											borderRadius: 5
										}}
									/>
								</>
							</Fade>
						</Box>
						{children}
					</>
				</VisibilitySensor>
			</Box>
		</section>
	);
};

export default Layout;

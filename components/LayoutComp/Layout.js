/** @format */
import { Box, Typography } from '@mui/material';
import styles from '/styles/Home.module.scss';
import { Stack } from '@mui/material';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import Fade from './Fade';

const Layout = ({ children, matches, refe, title }) => {
	const [isVisible, setVisible] = useState(false);
	const firstLetter = title.slice(0, 1);
	const restLetters = title.slice(1);
	return (
		<section className={styles.visi}>
			<Box
				ref={refe}
				sx={{
					height: !matches ? '100vh' : '100%',
					width: '100vw',

					p: 5
				}}>
				<VisibilitySensor
					className={styles.visi}
					active={isVisible ? false : true}
					partialVisibility
					onChange={(isVisiblee) => {
						setVisible(isVisiblee);
					}}>
					<>
						<Box
							sx={{
								pb: 0,
								height: '10%',
								width: '100%',
								margin: 'auto'
							}}>
							<Fade>
								<Stack
									direction='row'
									justifyContent='center'
									alignItems='center'
									sx={{
										width: '100%',
										height: '100%',
										mb: !matches ? 4 : -3
									}}>
									<Typography
										textAlign='center'
										fontSize={140}
										sx={{
											fontFamily: 'Alumni Sans Inline One',
											color: 'rgb(144, 0, 255)'
										}}>
										{firstLetter}
									</Typography>
									<Typography
										textAlign='center'
										variant='h1'
										sx={{
											fontFamily: 'Alumni Sans Inline One',
											color: 'white'
										}}>
										{restLetters}
									</Typography>
								</Stack>

								<Box
									className={styles.divid}
									sx={{
										height: 5,
										background:
											'linear-gradient(rgb(90, 0, 158),rgb(144, 0, 255))',
										margin: 'auto',
										borderRadius: 5
									}}
								/>
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

/** @format */

import { Box, Typography, Stack } from '@mui/material';
import styles from '/styles/Home.module.scss';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useEffect, useState } from 'react';
import styles2 from '/styles/Intro.module.scss';
import image from '../../public/jamala.png';
import Image from 'next/image';

const IntroSection = ({
	maxWidth900,
	reference,
	maxWidth600,
	maxWidth1200
}) => {
	const topBoxColor = 'rgba(200, 200, 200, 1)';
	const bottomBoxColor = 'rgb(144, 0, 255)';
	const topText = [
		{ name: 'HELLO,', style: styles2.intro0, color: topBoxColor },
		{ name: 'I', style: styles2.intro1, color: topBoxColor },
		{ name: 'AM', style: styles2.intro1, color: topBoxColor },
		{ name: 'ARTUR', style: styles2.intro1, color: topBoxColor }
	];
	const [bottomText, setBottomText] = useState([
		{ name: 'ASPIRING', style: styles2.intro2, color: bottomBoxColor },
		{ name: 'REACT', style: styles2.intro3, color: bottomBoxColor },
		{ name: 'DEVELOPER', style: styles2.intro3, color: bottomBoxColor }
	]);

	useEffect(() => {
		if (maxWidth900) {
			const dev = bottomText.map((item) => {
				if (item.name === 'DEVELOPER') {
					return { ...item, name: 'DEV' };
				} else {
					return item;
				}
			});
			setBottomText(dev);
		} else {
			const dev = bottomText.map((item) => {
				if (item.name === 'DEV') {
					return { ...item, name: 'DEVELOPER' };
				} else {
					return item;
				}
			});
			setBottomText(dev);
		}
	}, [maxWidth900]);

	const particlesInit = async (main) => {
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};

	return (
		<>
			<section ref={reference}>
				<Box
					className={styles2.introPage}
					sx={{
						borderColor: 'white',
						width: '100vw',
						height: '100vh',
						position: 'relative',
						bgcolor: 'rgb(5, 2, 8)'
					}}>
					<Particles
						className={styles2.particles}
						id='tsparticles'
						init={particlesInit}
						loaded={particlesLoaded}
						width='100vw'
						height='100%'
						options={{
							fullScreen: false,
							background: {
								color: {
									value: 'rgb(5, 2, 8)'
								}
							},
							fpsLimit: 120,
							interactivity: {
								events: {
									onClick: {
										enable: false,
										mode: 'push'
									},
									onHover: {
										enable: true,
										mode: 'repulse'
									},
									resize: true
								},
								modes: {
									push: {
										quantity: 4
									},
									repulse: {
										distance: 200,
										duration: 0.4
									}
								}
							},
							particles: {
								color: {
									value: ['rgb(144, 0, 255)', 'rgb(16, 20, 145)']
								},
								links: {
									color: 'rgb(144, 0, 255)',
									distance: 150,
									enable: true,
									opacity: 0.8,
									width: 7
								},
								collisions: {
									enable: true
								},
								move: {
									direction: 'none',
									enable: true,
									outModes: {
										default: 'bounce'
									},
									random: false,
									speed: 2,
									straight: false
								},
								number: {
									density: {
										enable: true,
										area: 800
									},
									value: 20
								},
								opacity: {
									value: 0.4
								},
								shape: {
									type: 'circle'
								},
								size: {
									value: { min: 5, max: 30 }
								}
							},
							detectRetina: false
						}}
					/>
					<Stack
						spacing={2}
						direction='column'
						sx={{
							borderRadius: 10,
							p: 4,
							background:
								'linear-gradient(rgba(10, 0, 15, 0.85),rgba(5, 2, 8, 0.85))',

							width: !maxWidth1200 ? '50%' : !maxWidth600 ? '60%' : '80%',
							position: 'absolute',
							top: '20%',
							left: !maxWidth600 ? '30%' : '10%'
						}}>
						<Box sx={{ margin: 'auto' }}>
							<Box
								sx={{ width: '100%', height: '100%' }}
								className={styles.fade900}>
								<Stack
									className={styles.fade600}
									sx={{ width: '100%' }}
									direction='row'
									justifyContent='center'
									spacing={5}>
									{topText.map((item, indx) => {
										return (
											<Typography
												key={indx}
												sx={{
													color: item.color,
													fontSize: !maxWidth600 ? 40 : 25
												}}
												className={item.style}>
												{item.name}
											</Typography>
										);
									})}
								</Stack>
							</Box>

							<Box sx={{ margin: 'auto' }} className={styles2.divider} />
						</Box>
						<Box sx={{ margin: 'auto' }}>
							<Box
								sx={{
									width: '100%',
									maxWidth: 500,
									height: '100%',
									margin: 'auto'
								}}
								className={styles.fade900}>
								<Stack
									className={styles.fade600}
									sx={{ width: '100%' }}
									direction='row'
									justifyContent='center'
									spacing={5}>
									{bottomText.map((item, indx) => {
										return (
											<Typography
												key={indx}
												sx={{
													color: item.color,
													fontSize: !maxWidth600 ? 50 : 32
												}}
												className={item.style}>
												{item.name}
											</Typography>
										);
									})}
								</Stack>
								<Box sx={{ margin: 'auto' }} className={styles2.divider2} />
							</Box>
						</Box>
						<Box className={styles2.img}>
							<Stack
								className={styles.fade600}
								direction='row'
								spacing={10}
								justifyContent='center'
								sx={{
									border: 2,
									margin: 'auto',
									position: 'relative',
									width: !maxWidth600 ? 250 : 170,
									height: !maxWidth600 ? 250 : 170,
									borderRadius: '50%',
									borderColor: 'rgb(144, 0, 255)',
									overflow: 'hidden'
								}}>
								<Image
									src={image}
									objectFit='cover'
									layout='fill'
									alt='image'
								/>
							</Stack>
						</Box>
					</Stack>
				</Box>
			</section>
		</>
	);
};

export default IntroSection;

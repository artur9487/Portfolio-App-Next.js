/** @format */

import { Box, Typography, Stack } from '@mui/material';
import styles from '/styles/Home.module.scss';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useEffect, useState } from 'react';
import styles2 from '/styles/Intro.module.scss';
import image from '../../public/jamala.png';
import Image from 'next/image';

const IntroSection = ({ matches2, refe, matches3 }) => {
	const upperCol = 'rgba(200, 200, 200, 1)';
	const downCol = 'rgb(144, 0, 255)';
	const [obj, setObj] = useState([
		{ name: 'HELLO,', styl: styles2.intro0, col: upperCol },
		{ name: 'I', styl: styles2.intro1, col: upperCol },
		{ name: 'AM', styl: styles2.intro1, col: upperCol },
		{ name: 'ARTUR', styl: styles2.intro1, col: upperCol }
	]);
	const [obj2, setObj2] = useState([
		{ name: 'ASPIRING', styl: styles2.intro2, col: downCol },
		{ name: 'REACT', styl: styles2.intro3, col: downCol },
		{ name: 'DEVELOPER', styl: styles2.intro3, col: downCol }
	]);

	const TextTypography = ({ item }) => {
		return (
			<Typography
				sx={{
					fontFamily: 'Alumni Sans Inline One',
					color: item.col,
					fontSize: !matches3 ? 40 : 35
				}}
				className={item.styl}>
				{item.name}
			</Typography>
		);
	};

	const TextTypography2 = ({ item }) => {
		return (
			<Typography
				sx={{
					fontFamily: 'Alumni Sans Inline One',
					color: item.col,
					fontSize: !matches3 ? 50 : 35
				}}
				className={item.styl}>
				{item.name}
			</Typography>
		);
	};

	useEffect(() => {
		if (matches2) {
			const newObj2 = obj2.map((item) => {
				if (item.name === 'DEVELOPER') {
					return { ...item, name: 'DEV' };
				} else {
					return item;
				}
			});
			setObj2(newObj2);
		} else {
			const newObj2 = obj2.map((item) => {
				if (item.name === 'DEV') {
					return { ...item, name: 'DEVELOPER' };
				} else {
					return item;
				}
			});
			setObj2(newObj2);
		}
	}, [matches2]);

	const particlesInit = async (main) => {
		await loadFull(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};

	return (
		<>
			<section ref={refe}>
				<Box
					className={styles2.introPage}
					sx={{
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
						width='100%'
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
							maxWidth: '60%',
							position: 'absolute',
							top: '20%',
							left: '30%'
						}}>
						<Box sx={{ width: '60%', margin: 'auto' }}>
							<Stack
								className={styles.fade1200}
								sx={{ width: '100%' }}
								direction='row'
								justifyContent='center'
								spacing={5}>
								{obj.map((item, indx) => {
									return <TextTypography key={indx} item={item} />;
								})}
							</Stack>
							<Box className={styles2.divider} />
						</Box>
						<Box>
							<Stack
								className={[styles.fade1200]}
								sx={{ width: '100%' }}
								direction='row'
								justifyContent='center'
								spacing={5}>
								{obj2.map((item, indx) => {
									return <TextTypography2 key={indx} item={item} />;
								})}
							</Stack>
							<Box className={styles2.divider2} />
						</Box>
						<Box className={styles2.img}>
							<Stack
								direction='row'
								spacing={10}
								justifyContent='center'
								sx={{
									margin: 'auto',
									position: 'relative',
									width: !matches3 ? 250 : 170,
									height: !matches3 ? 250 : 170,
									borderRadius: '50%',
									border: 5,
									borderColor: 'rgb(144, 0, 255)',
									overflow: 'hidden'
								}}>
								<Image src={image} objectFit='cover' layout='fill' />
							</Stack>
						</Box>
					</Stack>
				</Box>
			</section>
		</>
	);
};

export default IntroSection;

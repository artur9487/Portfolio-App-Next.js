/** @format */
import ProjectCard from './ProjectCard';
import { Stack, Box, Grid } from '@mui/material';
import styles from '/styles/Home.module.scss';

const ThirdSection = ({ placeData, maxWidth1200, maxWidth600 }) => {
	return (
		<>
			<Stack
				className={styles.fade600}
				sx={{ width: '100%', margin: 'auto', height: '90%', mt: 2 }}
				direction='row'
				alignItems='center'
				justifyContent='center'>
				<Box sx={{ width: '100%', height: '100%' }} className={styles.fade1200}>
					<Grid
						className={styles.fade900}
						sx={{ margin: 'auto', width: '80%', height: '100%' }}
						rowSpacing={4}
						columnSpacing={maxWidth600 ? 0 : 4}
						container
						direction='row'
						justifyContent='center'
						alignItems='center'>
						{placeData.map((items, indx) => {
							return (
								<Grid
									sx={{ width: '100%' }}
									key={indx}
									container
									direction='row'
									justifyContent='center'
									alignItems='center'
									item
									sm={12}
									lg={4}
									md={6}>
									<ProjectCard
										maxWidth600={maxWidth600}
										key={items.id}
										items={items}
										indx={indx}
										maxWidth1200={maxWidth1200}
									/>
								</Grid>
							);
						})}
					</Grid>
				</Box>
			</Stack>
		</>
	);
};

export default ThirdSection;

/** @format */
import ProjectCard from './ProjectCard';
import { Stack, Box, Grid } from '@mui/material';
import styles from '/styles/Home.module.scss';

const ThirdSection = ({ result, matches, matches3 }) => {
	return (
		<>
			<Stack
				sx={{ width: '100%', margin: 'auto', height: '90%', mt: 2 }}
				direction='row'
				alignItems='center'
				justifyContent='center'>
				<Box sx={{ width: '100%', height: '100%' }} className={styles.fade1200}>
					<Grid
						className={styles.fade900}
						sx={{ margin: 'auto', width: '80%', height: '100%' }}
						rowSpacing={4}
						columnSpacing={matches3 ? 0 : 4}
						container
						direction='row'
						justifyContent='center'
						alignItems='center'>
						{result.map((items, indx) => {
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
										matches3={matches3}
										key={items.id}
										items={items}
										indx={indx}
										matches={matches}
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

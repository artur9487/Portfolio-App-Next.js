/** @format */
import ProjectCard from './ProjectCard';
import { Stack, Box, Grid } from '@mui/material';
import styles from '/styles/Home.module.scss';

const ThirdSection = ({ result, matches }) => {
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
						spacing={4}
						container
						direction='row'
						justifyContent='center'
						alignItems='center'>
						{result.map((items, indx) => {
							return (
								<Grid
									key={indx}
									container
									justifyContent='center'
									alignItems='center'
									item
									sm={12}
									lg={4}
									md={6}>
									<ProjectCard
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

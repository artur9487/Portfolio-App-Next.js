/** @format */
import styles2 from '/styles/Fourth.module.scss';
import styles from '/styles/Home.module.scss';
import { Stack, Box, Typography, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const SecondPart = ({
	matches3,
	matches2,
	isVisible,
	errorsy,
	setName,
	name,
	email,
	setEmail,
	message,
	setMessage,
	errorComp
}) => {
	return (
		<Box
			sx={{
				height: '70%',
				maxWidth: matches3 ? 375 : matches2 ? 475 : 650,
				minWidth: 250
			}}
			className={isVisible ? styles2.card1 : styles.noVis}>
			<Stack
				className={isVisible ? styles2.innerCard1 : styles.noVis}
				direction='column'
				alignItems='center'
				justifyContent='center'
				sx={{
					bgcolor: 'rgba(39, 37, 43, 0.5)',
					p: 3,
					borderRadius: 6,
					border: 2,
					borderColor: 'rgb(75, 71, 82)'
				}}
				spacing={4}>
				<Stack spacing={3} direction='row'>
					<EmailIcon sx={{ fontSize: 40, color: 'white' }} />
					<Typography
						textAlign='flex-start'
						sx={{
							fontSize: !matches3 ? 30 : 22,
							fontFamily: 'Alumni Sans Inline One',
							color: 'rgb(216, 214, 219)'
						}}>
						Or text me:
					</Typography>
				</Stack>
				<Stack direction='column' sx={{ width: '90%', height: '100%' }}>
					<Stack direction='row' sx={{ width: '100%' }} spacing={3}>
						<Box sx={{ width: '50%' }}>
							<Typography
								textAlign='center'
								sx={{
									fontSize: !matches3 ? 30 : 20,
									fontFamily: 'Alumni Sans Inline One',
									color: 'rgb(216, 214, 219)',
									fontStyle: 'italic'
								}}>
								Name
							</Typography>
						</Box>
						<Box sx={{ width: '50%' }}>
							<Typography
								textAlign='center'
								sx={{
									fontSize: !matches3 ? 30 : 20,
									fontFamily: 'Alumni Sans Inline One',
									color: 'rgb(216, 214, 219)',
									fontStyle: 'italic'
								}}>
								Email
							</Typography>
						</Box>
					</Stack>
					<Stack direction='row' sx={{ width: '100%' }} spacing={3}>
						<TextField
							error={errorsy.name ? true : false}
							name='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							fullWidth
							sx={{
								bgcolor: 'rgba(78, 78, 78, 0.8)'
							}}
							type='text'
							color='secondary'
							label=' '
							variant='outlined'
							InputLabelProps={{ shrink: false }}
							inputProps={{
								style: { fontSize: 20, color: 'white' }
							}}
						/>
						<TextField
							error={errorsy.email ? true : false}
							name='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							fullWidth
							label=' '
							variant='outlined'
							InputLabelProps={{ shrink: false }}
							sx={{
								bgcolor: 'rgba(78, 78, 78, 0.8)'
							}}
							type='text'
							color='secondary'
							inputProps={{
								style: { fontSize: 20, color: 'white' }
							}}
						/>
					</Stack>
					<Stack direction='row' sx={{ width: '100%' }} spacing={3}>
						<Box sx={{ width: '50%' }}>{errorsy.name && errorComp}</Box>
						<Box sx={{ width: '50%' }}>{errorsy.email && errorComp}</Box>
					</Stack>
				</Stack>
				<Stack sx={{ width: '90%', height: '100%' }}>
					<Typography
						textAlign='center'
						sx={{
							fontSize: !matches3 ? 30 : 20,
							fontFamily: 'Alumni Sans Inline One',
							color: 'rgb(216, 214, 219)',
							fontStyle: 'italic'
						}}>
						Message
					</Typography>
					<TextField
						error={errorsy.message ? true : false}
						name='message'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						fullWidth
						multiline
						minRows='5'
						label=' '
						variant='outlined'
						InputLabelProps={{ shrink: false }}
						type='text'
						color='secondary'
						sx={{
							color: 'white',
							bgcolor: 'rgba(78, 78, 78, 0.8)'
						}}
						inputProps={{ style: { fontSize: 20, color: 'white' } }}
					/>
					{errorsy.message && errorComp}
				</Stack>

				<button type='submit' className={styles2.pageButton}>
					<Typography
						fontSize={!matches3 ? 30 : 20}
						sx={{
							color: 'white',
							fontFamily: 'Alumni Sans Inline One'
						}}>
						Submit
					</Typography>
				</button>
			</Stack>
		</Box>
	);
};

export default SecondPart;

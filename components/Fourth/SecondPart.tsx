/** @format */
import styles2 from '/styles/Fourth.module.scss';
import styles from '/styles/Home.module.scss';
import { Stack, Box, Typography, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import {
	DetailedHTMLProps,
	FormHTMLAttributes,
	LegacyRef,
	useRef
} from 'react';

interface secondPart_schema {
	maxWidth600: boolean;
	maxWidth900: boolean;
	isVisible: boolean;
	setBoxStyle: React.Dispatch<React.SetStateAction<string>>;
	setTextStyle: React.Dispatch<React.SetStateAction<string>>;
}

const SecondPart: React.FC<secondPart_schema> = ({
	maxWidth600,
	maxWidth900,
	isVisible,
	setBoxStyle,
	setTextStyle
}) => {
	const form = useRef<HTMLFormElement>(null);
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm();

	const sendEmail: () => void = () => {
		emailjs
			.sendForm(
				'service_d6rbqns',
				'template_3umjr64',
				form.current
				//process.env.cont3
			)
			.then(
				(projectData) => {
					console.log(projectData.text);
					setBoxStyle(styles2.box_Visi);
					setTextStyle(styles2.text_Visi);
					setTimeout(() => {
						setBoxStyle(styles2.box_notVisi);
						setTextStyle(styles2.text_notVisi);
					}, 4000);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<Box
			sx={{
				height: '70%',
				maxWidth: maxWidth600 ? 375 : maxWidth900 ? 475 : 650,
				minWidth: 250
			}}
			className={isVisible ? styles2.card1 : styles.noVisibility}>
			<form ref={form} onSubmit={handleSubmit(sendEmail)}>
				<Stack
					className={isVisible ? styles2.innerCard1 : styles.noVisibility}
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
							sx={{
								fontSize: !maxWidth600 ? 30 : 22,
								textAlign: 'flex-start',
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
										fontSize: !maxWidth600 ? 30 : 20,

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
										fontSize: !maxWidth600 ? 30 : 20,

										color: 'rgb(216, 214, 219)',
										fontStyle: 'italic'
									}}>
									Email
								</Typography>
							</Box>
						</Stack>
						<Stack direction='row' sx={{ width: '100%' }} spacing={3}>
							<TextField
								{...register('name', {
									required: { value: true, message: 'Position is required' },
									minLength: {
										value: 4,
										message: 'The value must be at least 4 characters long'
									}
								})}
								error={errors.name ? true : false}
								name='name'
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
								{...register('email', {
									required: { value: true, message: 'Email is required' },
									minLength: {
										value: 6,
										message: 'The value must be at least 6 characters long'
									},
									pattern: {
										value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
										message: 'The email must have a right pattern'
									}
								})}
								error={errors.email ? true : false}
								name='email'
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
							<Box sx={{ width: '50%' }}>
								<Typography sx={{ color: 'red' }}>
									{errors.name?.message}
								</Typography>
							</Box>
							<Box sx={{ width: '50%' }}>
								<Typography sx={{ color: 'red' }}>
									{errors.email?.message}
								</Typography>
							</Box>
						</Stack>
					</Stack>
					<Stack sx={{ width: '90%', height: '100%' }}>
						<Typography
							textAlign='center'
							sx={{
								fontSize: !maxWidth600 ? 30 : 20,
								color: 'rgb(216, 214, 219)',
								fontStyle: 'italic'
							}}>
							Message
						</Typography>
						<TextField
							{...register('messageText', {
								required: { value: true, message: 'Position is required' },
								minLength: {
									value: 10,
									message: 'The value must be at least 10 characters long'
								}
							})}
							error={errors.email ? true : false}
							name='messageText'
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
						<Typography sx={{ color: 'red' }}>
							{errors.messageText?.message}
						</Typography>
					</Stack>

					<button type='submit' className={styles2.pageButton}>
						<Typography
							fontSize={!maxWidth600 ? 30 : 20}
							sx={{
								color: 'white',
								fontFamily: 'Alumni Sans Inline One'
							}}>
							Submit
						</Typography>
					</button>
				</Stack>
			</form>
		</Box>
	);
};

export default SecondPart;

/** @format */

import { Box, Stack, TextField, Typography } from '@mui/material';
import styles2 from '/styles/Fourth.module.scss';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '/styles/Home.module.scss';
import { makeStyles } from '@mui/styles';

const errorComp = (
	<Typography sx={{ fontFamily: 'Playfair Display', color: 'red' }}>
		Incorrect entry
	</Typography>
);

const useStyles = makeStyles(() => ({
	noBorder: {
		border: 'none'
	}
}));

const FourthSection = ({ matches3, matches }) => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [boxStyle, setBoxStyle] = useState(styles2.box_notVisi);
	const [textStyle, setTextStyle] = useState(styles2.text_notVisi);
	const classes = useStyles();

	const form = useRef();

	const initialErr = {
		name: false,
		email: false,
		message: false
	};

	const [errorsy, setErrorsy] = useState(initialErr);

	const handleErrors = () => {
		let errorNum = 0;
		let errors = { ...initialErr };

		if (!name) {
			errors = { ...errors, name: true };
			errorNum++;
		}
		if (!email) {
			errors = { ...errors, email: true };
			errorNum++;
		}
		if (!message) {
			errors = { ...errors, message: true };
			errorNum++;
		}
		setErrorsy(errors);
		return errorNum;
	};

	const sendEmail = (e) => {
		e.preventDefault();

		if (handleErrors() > 0) {
			return;
		}

		emailjs
			.sendForm(
				env.process.cont,
				env.process.cont2,
				form.current,
				env.process.cont3
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		setName('');
		setEmail('');
		setMessage('');
		setErrorsy(initialErr);
		setBoxStyle(styles2.box_Visi);
		setTextStyle(styles2.text_Visi);
		setTimeout(() => {
			setBoxStyle(styles2.box_notVisi);
			setTextStyle(styles2.text_notVisi);
		}, 4000);
	};
	return (
		<>
			<Stack
				className={styles.fade600}
				sx={{ height: '90%', mt: matches ? 0 : 5 }}>
				<form ref={form} onSubmit={sendEmail}>
					<Stack
						direction='column'
						justifyContent='center'
						alignItems='center'
						sx={{ position: 'relative', height: '100%', mt: 2 }}>
						<Stack
							direction='column'
							alignItems='center'
							justifyContent='center'
							sx={{ height: '50%', width: !matches3 ? '70%' : '100%' }}
							spacing={4}>
							<Typography
								textAlign='center'
								sx={{
									fontSize: !matches3 ? 32 : 22,
									fontFamily: 'Alumni Sans Inline One',
									color: 'white'
								}}>
								Would love to be a part of your company. If you think that too
								text me:
							</Typography>
							<Stack direction='column' sx={{ width: '100%', height: '100%' }}>
								<Stack direction='row' sx={{ width: '100%' }} spacing={3}>
									<Box sx={{ width: '50%' }}>
										<Typography
											textAlign='center'
											sx={{
												fontSize: !matches3 ? 30 : 25,
												fontFamily: 'Alumni Sans Inline One',
												color: 'white',
												fontStyle: 'italic'
											}}>
											Name
										</Typography>
									</Box>
									<Box sx={{ width: '50%' }}>
										<Typography
											textAlign='center'
											sx={{
												fontSize: !matches3 ? 30 : 25,
												fontFamily: 'Alumni Sans Inline One',
												color: 'white',
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
										label='.'
										inputProps={{
											style: { fontSize: 20, color: 'white' }
										}}
									/>
									<TextField
										className={classes.noBorder}
										error={errorsy.email ? true : false}
										name='email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										fullWidth
										label='.'
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
							<Stack sx={{ width: '100%', height: '100%' }}>
								<Typography
									textAlign='center'
									sx={{
										fontSize: !matches3 ? 30 : 25,
										fontFamily: 'Alumni Sans Inline One',
										color: 'white',
										fontStyle: 'italic'
									}}>
									Message
								</Typography>
								<TextField
									label='.'
									error={errorsy.message ? true : false}
									name='message'
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									fullWidth
									multiline
									minRows='7'
									variant='outlined'
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
									fontSize={!matches3 ? 30 : 25}
									sx={{ color: 'white', fontFamily: 'Alumni Sans Inline One' }}>
									Submit
								</Typography>
							</button>
							<Box>
								<Typography
									sx={{
										color: 'white',
										fontFamily: 'Alumni Sans Inline One'
									}}
									fontSize={!matches3 ? 32 : 27}>
									Or call me: 607805490
								</Typography>
							</Box>
						</Stack>
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
										fontSize: !matches3 ? 30 : 20,
										fontFamily: 'Alumni Sans Inline One'
									}}
									textAlign='center'
									className={textStyle}>
									Message sent
								</Typography>
							</Stack>
						</Box>
					</Stack>
				</form>
			</Stack>
		</>
	);
};

export default FourthSection;

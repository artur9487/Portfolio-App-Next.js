/** @format */

import { Box, Stack, TextField, Typography } from '@mui/material';
import styles2 from '/styles/Fourth.module.scss';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '/styles/Home.module.scss';
import { makeStyles } from '@mui/styles';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import VisibilitySensor from 'react-visibility-sensor';

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

const FourthSection = ({ matches3, matches, matches2 }) => {
	const [isVisible, setVisible] = useState(false);
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
			<VisibilitySensor
				className={styles.visi}
				active={isVisible ? false : true}
				partialVisibility
				onChange={(isVisiblee) => {
					setVisible(isVisiblee);
				}}>
				<Stack
					className={styles.fade1200}
					sx={{
						height: '90%',
						py: !matches ? 0 : 5,
						px: !matches ? 5 : !matches3 ? 11 : 0
					}}>
					<form ref={form} onSubmit={sendEmail}>
						<Stack
							direction={!matches ? 'row' : 'column'}
							justifyContent='center'
							alignItems='center'
							spacing={5}
							sx={{ position: 'relative', height: '100%' }}>
							<Stack
								justifyContent='flex-start'
								direction='column'
								spacing={4}
								sx={{ height: '50%' }}>
								<Box className={isVisible ? styles2.card0 : styles.noVis}>
									<Stack
										className={isVisible ? styles2.innerCard0 : styles.noVis}
										sx={{
											bgcolor: 'rgba(39, 37, 43, 0.5)',
											p: !matches3 ? 5 : 3,
											borderRadius: 6,
											border: 2,
											borderColor: 'rgb(75, 71, 82)'
										}}>
										<Typography
											textAlign='flex-start'
											sx={{
												fontSize: matches3 ? 24 : matches2 ? 30 : 40,
												fontFamily: 'Alumni Sans Inline One',
												color: 'rgb(216, 214, 219)'
											}}>
											Would love to be a part of your company!
										</Typography>
										<Typography
											textAlign='flex-start'
											sx={{
												fontSize: matches3 ? 20 : matches2 ? 26 : 33,
												fontFamily: 'Alumni Sans Inline One',
												color: 'rgb(216, 214, 219)'
											}}>
											If you think that too:
										</Typography>
									</Stack>
								</Box>
								<Box className={isVisible ? styles2.card0 : styles.noVis}>
									<Stack
										className={isVisible ? styles2.innerCard0 : styles.noVis}
										spacing={4}
										direction='row'
										alignItems='center'
										sx={{
											bgcolor: 'rgba(39, 37, 43, 0.5)',
											p: !matches3 ? 5 : 2,
											borderRadius: 6,
											border: 2,
											borderColor: 'rgb(75, 71, 82)'
										}}>
										<Stack alignItems='center' spacing={3} direction='row'>
											<CallIcon
												sx={{ fontSize: 40, color: 'rgb(216, 214, 219)' }}
											/>
											<Typography
												textAlign='flex-start'
												sx={{
													fontSize: matches3 ? 20 : matches2 ? 26 : 33,
													fontFamily: 'Alumni Sans Inline One',
													color: 'rgb(216, 214, 219)'
												}}>
												Call me:
											</Typography>
										</Stack>
										<Typography
											textAlign='flex-start'
											sx={{
												ml: 30,
												fontSize: matches3 ? 20 : matches2 ? 26 : 33,
												fontFamily: 'Alumni Sans Inline One',
												color: 'rgb(216, 214, 219)'
											}}>
											+48607805490
										</Typography>
									</Stack>
								</Box>
							</Stack>
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
									<Stack
										direction='column'
										sx={{ width: '90%', height: '100%' }}>
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
											<Box sx={{ width: '50%' }}>
												{errorsy.name && errorComp}
											</Box>
											<Box sx={{ width: '50%' }}>
												{errorsy.email && errorComp}
											</Box>
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
											label='.'
											error={errorsy.message ? true : false}
											name='message'
											value={message}
											onChange={(e) => setMessage(e.target.value)}
											fullWidth
											multiline
											minRows='5'
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
			</VisibilitySensor>
		</>
	);
};

export default FourthSection;

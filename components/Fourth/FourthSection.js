/** @format */

import { Box, Stack, Typography } from '@mui/material';
import styles2 from '/styles/Fourth.module.scss';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '/styles/Home.module.scss';
import VisibilitySensor from 'react-visibility-sensor';
import FirstPart from './FirstPart';
import SecondPart from './SecondPart';

const errorComp = (
	<Typography sx={{ fontFamily: 'Playfair Display', color: 'red' }}>
		Incorrect entry
	</Typography>
);

const FourthSection = ({ maxWidth600, maxWidth1200, maxWidth900 }) => {
	const [isVisible, setVisible] = useState(false);
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const [boxStyle, setBoxStyle] = useState(styles2.box_notVisi);
	const [textStyle, setTextStyle] = useState(styles2.text_notVisi);

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
				process.env.cont,
				process.env.cont2,
				form.current,
				process.env.cont3
			)
			.then(
				(projectData) => {
					console.log(projectData.text);
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
				className={styles.visibilityStyle}
				active={isVisible ? false : true}
				partialVisibility
				onChange={(isVisibleProp) => {
					setVisible(isVisibleProp);
				}}>
				<Stack
					className={styles.fade1200}
					sx={{
						height: '90%',
						py: !maxWidth1200 ? 0 : 5,
						px: !maxWidth1200 ? 5 : !maxWidth600 ? 11 : 0
					}}>
					<form ref={form} onSubmit={sendEmail}>
						<Stack
							direction={!maxWidth1200 ? 'row' : 'column'}
							justifyContent='center'
							alignItems='center'
							spacing={5}
							sx={{ position: 'relative', height: '100%' }}>
							<FirstPart
								maxWidth900={maxWidth900}
								maxWidth600={maxWidth600}
								isVisible={isVisible}
							/>
							<SecondPart
								errorsy={errorsy}
								setName={setName}
								name={name}
								email={email}
								setEmail={setEmail}
								message={message}
								setMessage={setMessage}
								maxWidth900={maxWidth900}
								maxWidth600={maxWidth600}
								isVisible={isVisible}
								errorComp={errorComp}
							/>
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
											fontSize: !maxWidth600 ? 30 : 20,
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

/** @format */

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';

const TechCard = ({ indx }) => {
	return (
		<Card className='slide' sx={{ p: 2 }}>
			<CardMedia sx={{ width: '100%', height: '100%', position: 'relative' }}>
				<Image layout='fill' objectFit='contain' src={`/img/${indx}.jpg`} />
			</CardMedia>
		</Card>
	);
};

export default TechCard;

/** @format */

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image';

interface techCard_schema {
	indx: number;
}

const TechCard: React.FC<techCard_schema> = ({ indx }) => {
	return (
		<Card className='slide' sx={{ p: 2 }}>
			<CardMedia sx={{ width: '100%', height: '100%', position: 'relative' }}>
				<Image
					layout='fill'
					objectFit='contain'
					src={`/img/${indx}.jpg`}
					alt='image'
				/>
			</CardMedia>
		</Card>
	);
};

export default TechCard;

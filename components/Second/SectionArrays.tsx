/** @format */
import styles2 from '../../styles/Second.module.scss';
import { bracketsCoordinates1_schema } from '../../interfaceGlobalSchemas';
import { bracketsCoordinates2_schema } from '../../interfaceGlobalSchemas';

export const technology: string[] = [
	'HTML',
	'Javascript',
	'Next.js',
	'React Native',
	'React.js',
	'Express.js',
	'React Nav',
	'Firebase',
	'Git',
	'GraphQl',
	'Redux',
	'Redux-Saga',
	'CSS',
	'Sass',
	'Styled-Comp',
	'Material UI'
];

export const bracketsCoordinates1: bracketsCoordinates1_schema[] = [
	{
		ifNot600_width_Value: 90,
		if600_width_Value: 45,
		ifNot600_height_Value: 10,
		if600_height_Value: 5,
		bottom_Value: -10,
		right_Value: 0,
		gradient: 'linear-gradient(45deg, rgb(90, 0, 158),rgb(144, 0, 255))'
	},
	{
		ifNot600_width_Value: 10,
		if600_width_Value: 5,
		ifNot600_height_Value: 90,
		if600_height_Value: 45,
		bottom_Value: -10,
		right_Value: 0,
		gradient: 'linear-gradient(125deg, rgb(90, 0, 158),rgb(144, 0, 255))'
	}
];

export const bracketsCoordinates2: bracketsCoordinates2_schema[] = [
	{
		ifNot600_width_Value: 60,
		if600_width_Value: 30,
		ifNot600_height_Value: 10,
		if600_height_Value: 5,
		top_Value: -30,
		left_Value: -15,
		gradient: 'linear-gradient(45deg, rgb(90, 0, 158),rgb(144, 0, 255))'
	},
	{
		ifNot600_width_Value: 10,
		if600_width_Value: 5,
		ifNot600_height_Value: 60,
		if600_height_Value: 30,
		top_Value: -30,
		left_Value: -15,
		gradient: 'linear-gradient(125deg, rgb(90, 0, 158),rgb(144, 0, 255))'
	}
];

interface techBigScreenParams_schema {
	gridColumns: number;
	marginPosition: string;
	positionReveal: string;
	shadowPosition: string;
	type: string;
}

export const techBigScreenParams: techBigScreenParams_schema[] = [
	{
		gridColumns: 12,
		marginPosition: 'auto',
		positionReveal: styles2.fourthBig,
		shadowPosition: styles2.up,
		type: 'firstBig'
	},
	{
		gridColumns: 6,
		marginPosition: 'right',
		positionReveal: styles2.third2Big,
		shadowPosition: styles2.right,
		type: 'none'
	},
	{
		gridColumns: 6,
		marginPosition: 'left',
		positionReveal: styles2.thirdBig,
		shadowPosition: styles2.left,
		type: 'none'
	},
	{
		gridColumns: 4,
		marginPosition: 'right',
		positionReveal: styles2.second2Big,
		shadowPosition: styles2.right,
		type: 'none'
	},
	{
		gridColumns: 4,
		marginPosition: 'auto',
		positionReveal: styles2.secondBig,
		shadowPosition: styles2.noShadow,
		type: 'none'
	},
	{
		gridColumns: 4,
		marginPosition: 'left',
		positionReveal: styles2.secondBig,
		shadowPosition: styles2.left,
		type: 'none'
	},
	{
		gridColumns: 3,
		marginPosition: 'auto',
		positionReveal: styles2.firstBig,
		shadowPosition: styles2.right,
		type: 'none'
	},
	{
		gridColumns: 3,
		marginPosition: 'auto',
		positionReveal: styles2.firstBig,
		shadowPosition: styles2.noShadow,
		type: 'none'
	},
	{
		gridColumns: 3,
		marginPosition: 'auto',
		positionReveal: styles2.firstBig,
		shadowPosition: styles2.noShadow,
		type: 'none'
	},
	{
		gridColumns: 3,
		marginPosition: 'auto',
		positionReveal: styles2.firstBig,
		shadowPosition: styles2.left,
		type: 'none'
	},
	{
		gridColumns: 4,
		marginPosition: 'right',
		positionReveal: styles2.second2Big,
		shadowPosition: styles2.right,
		type: 'none'
	},
	{
		gridColumns: 4,
		marginPosition: 'auto',
		positionReveal: styles2.secondBig,
		shadowPosition: styles2.noShadow,
		type: 'none'
	},
	{
		gridColumns: 4,
		marginPosition: 'left',
		positionReveal: styles2.secondBig,
		shadowPosition: styles2.left,
		type: 'none'
	},
	{
		gridColumns: 6,
		marginPosition: 'right',
		positionReveal: styles2.third2Big,
		shadowPosition: styles2.right,
		type: 'none'
	},
	{
		gridColumns: 6,
		marginPosition: 'left',
		positionReveal: styles2.thirdBig,
		shadowPosition: styles2.left,
		type: 'none'
	},

	{
		gridColumns: 12,
		marginPosition: 'auto',
		positionReveal: styles2.fourthBig,
		shadowPosition: styles2.down,
		type: 'firstBig'
	}
];

interface techSmallScreenParams_schema {
	positionReveal: string;
	shadowPosition: string;
}

export const techSmallScreenParams: techSmallScreenParams_schema[] = [
	{ positionReveal: styles2.firstSmall, shadowPosition: styles2.up },
	{ positionReveal: styles2.firstSmall, shadowPosition: styles2.up },
	{ positionReveal: styles2.secondSmall, shadowPosition: styles2.right },
	{ positionReveal: styles2.secondSmall, shadowPosition: styles2.left },
	{ positionReveal: styles2.thirdSmall, shadowPosition: styles2.right },
	{ positionReveal: styles2.thirdSmall, shadowPosition: styles2.left },
	{ positionReveal: styles2.fourthSmall, shadowPosition: styles2.right },
	{ positionReveal: styles2.fourthSmall, shadowPosition: styles2.left },
	{ positionReveal: styles2.fifthSmall, shadowPosition: styles2.right },
	{ positionReveal: styles2.fifthSmall, shadowPosition: styles2.left },
	{ positionReveal: styles2.sixthSmall, shadowPosition: styles2.right },
	{ positionReveal: styles2.sixthSmall, shadowPosition: styles2.left },
	{ positionReveal: styles2.seventhSmall, shadowPosition: styles2.right },
	{ positionReveal: styles2.seventhSmall, shadowPosition: styles2.left },
	{ positionReveal: styles2.eighthSmall, shadowPosition: styles2.up },
	{ positionReveal: styles2.eighthSmall, shadowPosition: styles2.up }
];

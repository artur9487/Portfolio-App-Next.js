/** @format */
import styles2 from '/styles/First.module.scss';
import { bracketsCoordinates1_schema } from '../../interfaceGlobalSchemas';
import { bracketsCoordinates2_schema } from '../../interfaceGlobalSchemas';

interface text_schema {
	text: string;
	style: string;
}

export const text: text_schema[] = [
	{
		text: `Hi! I am Artur. I am learning frontend technologies for about 2 years. I am looking for a job as React, React-native or Next.js developer.`,
		style: styles2.text1
	},
	{
		text: `I am a self-learner and took my entire knowledge from tutorials, documentations, and developer articles. `,
		style: styles2.text2
	},
	{
		text: `I developed few projects as a utilization of my current knowledge `,
		style: styles2.text3
	}
];

export const bracketsCoordinates1: bracketsCoordinates1_schema[] = [
	{
		ifNot600_width_Value: 90,
		if600_width_Value: 45,
		ifNot600_height_Value: 10,
		if600_height_Value: 5,
		bottom_Value: 0,
		right_Value: 0,
		gradient: 'linear-gradient(45deg, rgb(90, 0, 158),rgb(144, 0, 255))'
	},
	{
		ifNot600_width_Value: 10,
		if600_width_Value: 5,
		ifNot600_height_Value: 90,
		if600_height_Value: 45,
		bottom_Value: 0,
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
		top_Value: -15,
		left_Value: 0,
		gradient: 'linear-gradient(45deg, rgb(90, 0, 158),rgb(144, 0, 255))'
	},
	{
		ifNot600_width_Value: 10,
		if600_width_Value: 5,
		ifNot600_height_Value: 60,
		if600_height_Value: 30,
		top_Value: -10,
		left_Value: 0,
		gradient: 'linear-gradient(125deg, rgb(90, 0, 158),rgb(144, 0, 255))'
	}
];

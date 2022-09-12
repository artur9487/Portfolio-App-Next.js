/** @format */

export interface bracketsCoordinates1_schema {
	isVisible?: boolean;
	ifNot600_width_Value: number;
	if600_width_Value: number;
	ifNot600_height_Value: number;
	if600_height_Value: number;
	bottom_Value: number;
	right_Value: number;
	gradient: string;
	maxWidth600?: boolean;
}
export interface bracketsCoordinates2_schema {
	isVisible?: boolean;
	ifNot600_width_Value: number;
	if600_width_Value: number;
	ifNot600_height_Value: number;
	if600_height_Value: number;
	top_Value: number;
	left_Value: number;
	gradient: string;
	maxWidth600?: boolean;
}

export interface technologies_schema {
	technology: string[];
	maxWidth1200?: boolean;
	maxWidth900?: boolean;
	isVisible: boolean;
}

export interface projectPros_schema {
	projectData: {
		node: {
			description: string;
			id: string;
			photo0: { url: string };
			photo1: { url: string };
			photo2: { url: string };
			projLink: string;
			projectName: string;
			repo: string;
			stack: string;
			technology: string;
		};
	}[];
	maxWidth1200?: boolean;
	maxWidth600?: boolean;
}

export interface singleProject_schema {
	singleProject: {
		node: {
			description: string;
			id: string;
			photo0: { url: string };
			photo1: { url: string };
			photo2: { url: string };
			projLink: string;
			projectName: string;
			repo: string;
			stack: string;
			technology: string;
		};
	};
}

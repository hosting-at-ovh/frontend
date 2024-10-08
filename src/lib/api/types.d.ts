export type APIStats = {
	users: number;
	organizations: number;
	projects: number;
	translations: number;
};

export type APIProject = {
	id: number;
	name: string;
	identifier: string;
	description: string;
	privateProject: boolean;
	sourceLanguage: string;
	targetLanguages: string[];
	created: number;
};
